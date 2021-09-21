import React from "react";
import {  Form, Button } from "react-bootstrap";
import { Formik, useFormik } from "formik";
import { useToasts } from "react-toast-notifications";
import ItemService from "../../../services/ItemService";

export default function ImageAdd(){
  const { addToast } = useToasts();

  let itemService = new ItemService();
  
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
          appearance: result.data.success ? "success" : "error",
          autoDismiss: true,
        })
      );
    },
  });

  // 2267

  return (
    <div>
          <Formik>
            <Form
              onSubmit={formik2.handleSubmit}
              style={{ paddingTop: "20px" }}
            >
              <Form.Group
                onChange={formik2.handleChange}
                onBlur={formik2.handleBlur}
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
                onBlur={formik2.handleBlur}
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
    </div>
  );
}
