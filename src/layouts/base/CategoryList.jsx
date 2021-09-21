import React, { useState, useEffect } from "react";
import { CardBox, IconBox, SearchButton } from "../../Styles";
import CategoryService from "../../services/CategoryService";
import { Container } from "../../Styles";
import { ReactComponent as AddIcon } from "../../assets/eye.svg";
import { Button } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";

export default function CategoryList() {
  const { addToast } = useToasts();
  const icon = [<AddIcon />];

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService.getAll().then((result) => setCategories(result.data.data));
  }, []);

  const CardVariants = {
    beforeHover: {},
    onHover: {
      scale: 1.1,
    },
  };

  const IconVariants = {
    beforeHover: {
      opacity: 0,
      y: -50,
    },
    onHover: {
      opacity: 1,
      y: 0,
      scale: 1.5,
      transition: {
        type: "tween",
      },
    },
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button className="w-100 mb-2 mt-1" variant="outline">
        Kategoriler
      </Button>
      {categories.map((category,index) => (
        <a
          style={{ textDecorationLine: "none", textDecoration: "none" }}
          href={`/items/${category.id}`}
        >
          <Container key={index} initial={{ x: -1000 }} animate={{ x: 0 }}>
            <CardBox
              style={{ backgroundImage: `url("${category.imageUrl}")` }}
              variants={CardVariants}
              initial="beforeHover"
              whileHover="onHover"
            >
              <h5
                className="text-center bg-dark"
                style={{ color: "white", bottom: "0" }}
              >
                {category.categoryName}
              </h5>
              <IconBox variants={IconVariants}>{icon}</IconBox>
            </CardBox>
          </Container>
        </a>
      ))}
    </div>
  );
}
