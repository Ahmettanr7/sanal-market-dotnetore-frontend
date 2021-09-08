import React, { useState, useEffect } from "react";
import { Card, Button, Pagination, Form } from "react-bootstrap";
import { useParams } from "react-router";
import { Container } from "../../../Styles";
import ItemService from "../../../services/ItemService";
import { RiImageAddFill } from "react-icons/ri";
import { useToasts } from "react-toast-notifications";
import { GrDocumentUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { Formik, useFormik } from "formik";

export default function AdminItemSearchList() {
  const { addToast } = useToasts();
  let { itemName } = useParams();

  const [items, setItems] = useState([]);
  const [totalItem, setTotalItem] = useState([]);

  let itemService = new ItemService();
  useEffect(() => {
    itemService
      .getByItemName(itemName)
      .then((result) => setTotalItem(result.data.data));
  }, []);
  useEffect(() => {
    itemService
      .getByItemNamePageable(itemName, pageNo, pageSize)
      .then((result) => setItems(result.data.data));
  }, [items]);

  const formik2 = useFormik({
    initialValues: {
      itemId: "",
      multipartFile: [],
    },
    onSubmit: (values) => {
      const data = new FormData();
      data.append("multipartFile", values.multipartFile[0]);
      itemService.imageUpload(values.itemId, data).then((result) =>
        addToast(result.data, {
          appearance: (result.status = "200" ? "success" : "error"),
          autoDismiss: true,
        })
      );
    },
  });

  const [pageNo, setActivePage] = useState(1);
  const [pageSize, setPageSize] = useState(32);
  const totalPages = Math.ceil(totalItem.length / pageSize);

  const first = () => setActivePage(1);
  const prev = () => setActivePage(pageNo - 1);
  const next = () => setActivePage(pageNo + 1);
  const last = () => setActivePage(totalPages);

  function roll(value, step) {
    step = Math.pow(10, step);
    return Math.round(value * step) / step;
  }

  let delete_ = (id) => {
    itemService.delete(id).then((result) => {
      addToast(result.data.message, {
        appearance: result.data.success ? "success" : "error",
        autoDismiss: true,
      });
    });
  };
  return (
    <div>
      <Container initial={{ y: -700 }} animate={{ y: 0 }}>
        {items.map((item, index) => (
          <Card
            key={index}
            style={{
              width: "18rem",
              display: "inline-block",
              margin: "20px",
              padding: "10px",
              height: "650px",
              maxHeight: "650px",
              width: "200px",
              maxWidth: "200px",
            }}
          >
            {item.imageUrl ? (
              <Card.Img
                style={{ height: "120px" }}
                variant="top"
                src={item.imageUrl}
              />
            ) : (
              <Card.Img
                style={{ height: "120px" }}
                variant="top"
                src="https://davutsahin.net/wp-content/uploads/2020/10/gorsel-hazirlaniyor-600x400-1-375x195.png"
              />
            )}
            <Card.Body>
              <Card.Title>{item.brand}</Card.Title>
              <Card.Text
                style={{
                  height: "50px",
                  overflow: "hidden",
                  fontSize: "medium",
                }}
              >
                {item.itemName}
              </Card.Text>
              <Card.Title
                style={{
                  height: "25px",
                  overflow: "hidden",
                  color: "blue",
                  marginTop: "-20px",
                }}
              >
                {roll(item.unitPrice, 2)} ₺ <br />
                <span
                  className="text-muted"
                  style={{ textDecoration: "line-through", fontSize: "small" }}
                >
                  {roll(item.unitPrice + item.unitPrice * 0.15, 2)} ₺
                </span>
              </Card.Title>

              <Card.Text
                style={{
                  height: "20px",
                  overflow: "hidden",
                  fontSize: "medium",
                }}
              >
                {item.category.categoryName}
              </Card.Text>
              <Card.Text
                style={{
                  height: "20px",
                  overflow: "hidden",
                  fontSize: "medium",
                }}
              >
                {item.category2}
              </Card.Text>
              <Card.Text
                style={{
                  height: "20px",
                  overflow: "hidden",
                  fontSize: "medium",
                }}
              >
                {item.category3}
              </Card.Text>
              <Card.Text
                style={{
                  height: "20px",
                  overflow: "hidden",
                  fontSize: "medium",
                }}
              >
                {item.category4}
              </Card.Text>
              <Formik>
                <Form onSubmit={formik2.handleSubmit}>
                  <Form.Group
                   onChange={formik2.handleChange}
                    onBlur={formik2.handleBlur}
                    value={formik2.values.itemId}
                    className="mb-3"
                  >
                    <Form.Control
                      type="number"
                      placeholder="Ürün Id Numarası"
                      id="itemId"
                      defaultValue={item.id}
                    />
                  </Form.Group>
                  <Form.Group
                    onChange={(event) => {
                      const files = event.target.files;
                      let myFiles = Array.from(files);
                      formik2.setFieldValue("multipartFile", myFiles);
                    }}
                    onBlur={formik2.handleBlur}
                    value={formik2.values.multipartFile}
                    className="mb-3"
                  >
                    <Form.Control type="file" id="multipartFile" />
                  </Form.Group>
                  <Button type="submit" variant="success" className="w-100">
                    <RiImageAddFill />
                    Resim Ekle
                  </Button>
                </Form>
              </Formik>
              <Button variant="warning" className="w-100">
                <GrDocumentUpdate />
                Güncelle
              </Button>
              <Button
              onClick={() => delete_(item.id)}
              variant="danger" className="w-100">
                <AiFillDelete />
                Sil
              </Button>
            </Card.Body>
          </Card>
        ))}
        {items.length > 0 && (
          <Pagination style={{ marginLeft: "35%" }} size="lg">
            <Pagination.First onClick={first} disabled={pageNo === 1} />
            <Pagination.Prev onClick={prev} disabled={pageNo === 1} />
            <Pagination.Item>
              {pageNo} | {totalPages}
            </Pagination.Item>
            <Pagination.Next onClick={next} disabled={pageNo === totalPages} />
            <Pagination.Last onClick={last} disabled={pageNo === totalPages} />
          </Pagination>
        )}
      </Container>
    </div>
  );
}
