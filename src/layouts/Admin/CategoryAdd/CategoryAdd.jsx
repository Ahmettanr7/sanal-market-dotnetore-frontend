import { Formik, useFormik } from "formik";
import React from "react";
import { Form, Button } from "react-bootstrap";
import CategoryService from "../../../services/CategoryService";
import { useToasts } from "react-toast-notifications";

export default function CategoryAdd() {

    const { addToast } = useToasts();
    
    let categoryService = new CategoryService();
    const formik = useFormik({
      initialValues: {
        categoryName: "",
        imageUrl: "",
      },
      onSubmit: (values) => {
        categoryService.add(values).then((result) =>
          addToast(result.data.message, {
            appearance: result.data.success ? "success" : "error",
            autoDismiss: false,
          })
        );
      },
    });
  return (
    <div>
      <Formik>
        <Form
          onSubmit={formik.handleSubmit}
          style={{ padding: "20px 80px 80px 80px" }}
        >
          <Form.Group
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.categoryName}
            className="mb-3"
          >
            <Form.Label>Kategori Adı</Form.Label>
            <Form.Control
              type="text"
              placeholder="Kategori Adı"
              id="categoryName"
            />
          </Form.Group>
          <Form.Group
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imageUrl}
            className="mb-3"
          >
            <Form.Label>Resim Yolu</Form.Label>
            <Form.Control type="text" placeholder="Resim Yolu" id="imageUrl" />
          </Form.Group>
          <Button type="submit" variant="success">
            Kategoriyi Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
