import React, { useState, useEffect } from "react";
import { FloatingLabel, Form, Button, Col, Row } from "react-bootstrap";
import { Formik, useFormik } from "formik";
import { useToasts } from "react-toast-notifications";
import ItemService from "../../../services/ItemService";
import CategoryService from "../../../services/CategoryService";

export default function ItemAdd(){
  const { addToast } = useToasts();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService.getAll().then((result) => setCategories(result.data.data));
  }, []);

  let itemService = new ItemService();
  const formik = useFormik({
    initialValues: {
      itemCode: "",
      itemName: "",
      unitPrice: "",
      category1: "",
      category2: "",
      category3: "",
      category4: "",
      brand: "",
    },
    onSubmit: (values) => {
      itemService.add(values).then((result) =>
        addToast(result.data.message, {
          appearance: result.data.success ? "success" : "error",
          autoDismiss: false,
        })
      );
    },
  });
  

  const formik2 = useFormik({
    initialValues: {
      itemId: "",
      multipartFile: [],
    },
    onSubmit: (values) => {
        const data = new FormData();
        data.append("multipartFile",values.multipartFile[0]);
      itemService.imageUpload(values.itemId,data).then((result) =>
        addToast(result.data, {
          appearance: result.status="200" ? "success" : "error",
          autoDismiss: true,
        })
      );
    },
  });

  return (
    <div>
      <Row>
        <Col sm={8}>
          <Formik>
            <Form
              onSubmit={formik.handleSubmit}
              style={{ padding: "20px 80px 80px 80px" }}
            >
              <Form.Group
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
                value={formik.values.itemCode}
                className="mb-3"
              >
                <Form.Label>Ürün Kodu</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ürün kodu"
                  id="itemCode"
                />
              </Form.Group>
              <Form.Group
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
                value={formik.values.itemName}
                className="mb-3"
              >
                <Form.Label>Ürün Adı</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ürün Adı"
                  id="itemName"
                />
              </Form.Group>
              <Form.Group
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
                value={formik.values.unitPrice}
                className="mb-3"
              >
                <Form.Label>Birim Fiyatı</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Birim Fiyatı"
                  id="unitPrice"
                />
              </Form.Group>

              <Form.Label>Temel Kategori</Form.Label>
              <FloatingLabel label="Ürünün Temel Kategorisini Seçiniz">
                <Form.Select
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  id="category1"
                  value={formik.values.category1}
                >
                  <option>Temel Kategori Seçiniz</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category.id}>
                      {category.categoryName}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <Form.Group
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
                value={formik.values.category2}
                className="mb-3"
              >
                <Form.Label>Kategori 2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Büyük Harflerle kategori2 giriniz"
                  id="category2"
                />
              </Form.Group>
              <Form.Group
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
                value={formik.values.category3}
                className="mb-3"
              >
                <Form.Label>Kategori 3</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Büyük Harflerle category3 giriniz"
                  id="category3"
                />
              </Form.Group>
              <Form.Group
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
                value={formik.values.category4}
                className="mb-3"
              >
                <Form.Label>Kategori 4</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Büyük Harflerle category4 giriniz"
                  id="category4"
                />
              </Form.Group>
              <Form.Group
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
                value={formik.values.brand}
                className="mb-3"
              >
                <Form.Label>Marka</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Büyük Harflerle Marka giriniz"
                  id="brand"
                />
              </Form.Group>
              <Button type="submit" variant="success">
                Ürünü Ekle
              </Button>
            </Form>
          </Formik>
        </Col>
        <Col sm={4}>
          <Formik>
            <Form
              onSubmit={formik2.handleSubmit}
              style={{ paddingTop: "20px" }}
            >
              <Form.Group
                onChange={formik2.handleChange}
                onBlur={formik2.onBlur}
                value={formik2.values.itemId}
                className="mb-3"
              >
                <Form.Label>Ürün Id Numarası</Form.Label> <br />
                <Form.Text className="text-dark">
                  <p>
                    Ürünü ekledikten sonra sol üst köşede yazan ID numarasını
                    alt kutuya yazınız.!
                  </p>
                </Form.Text>
                <Form.Control
                  type="number"
                  placeholder="Ürün Id Numarası"
                  id="itemId"
                />
              </Form.Group>
              <Form.Group
                onChange={(event) => {
                    const files = event.target.files;
                    let myFiles =Array.from(files);
                    formik2.setFieldValue("multipartFile", myFiles);
                  }}
                onBlur={formik2.onBlur}
                value={formik2.values.multipartFile}
                className="mb-3"
              >
                <Form.Label>Resim Seç</Form.Label>
                <Form.Control type="file" id="multipartFile" />
              </Form.Group>
              <Button type="submit" variant="success">
                Resim Yükle
              </Button>
            </Form>
          </Formik>
        </Col>
      </Row>
    </div>
  );
}
