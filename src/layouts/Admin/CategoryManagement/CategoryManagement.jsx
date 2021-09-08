import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import CategoryService from "../../../services/CategoryService";
import { useToasts } from "react-toast-notifications";

export default function CategoryManagement() {
  const { addToast } = useToasts();

  const [categories, setCategories] = useState([]);

  let categoryService = new CategoryService();

  useEffect(() => {
    categoryService.getAll().then((result) => setCategories(result.data.data));
  }, [categories]);

  let delete_ = (id) => {
    categoryService.delete(id).then((result) => {
      addToast(result.data.message, {
        appearance: result.data.success ? "success" : "error",
        autoDismiss: true,
      });
    });
  };

  return (
    <div
      style={{
        marginLeft: "-50px",
        marginTop: "25px",
      }}
    >
      <Table striped hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Kategori Adı</th>
            <th>Resim Yolu</th>
            <th>Düzenle</th>
            <th>Sil</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td>{category.id}</td>
              <td>{category.categoryName}</td>
              <td>{category.imageUrl}</td>
              <td>
                <Button variant="warning">Düzenle</Button>
              </td>
              <td>
                <Button onClick={() => delete_(category.id)} variant="danger">
                  Sil
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
