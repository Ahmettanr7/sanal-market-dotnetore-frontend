import React, { useState, useEffect } from "react";
import { Card, Button, Pagination, Breadcrumb } from "react-bootstrap";
import { useParams } from "react-router";
import {
  AddRemove,
  FlexContainer,
  Flex,
  Buttonn,
  Container,
} from "../../Styles";
import ItemService from "../../services/ItemService";
import CategoryService from "../../services/CategoryService";
import { MdAddShoppingCart } from "react-icons/md";
import CartService from "../../services/CartService";
import { useToasts } from "react-toast-notifications";

export default function ItemList() {
  const { addToast } = useToasts();
  let { id } = useParams();

  const [items, setItems] = useState([]);
  const [totalItem, setTotalItem] = useState([]);
  const [cat, setCat] = useState({});

  useEffect(() => {
    let itemService = new ItemService();
    let categoryService = new CategoryService();
    itemService
      .getByCategory(id, pageNo, pageSize)
      .then((result) => setItems(result.data.data));

      itemService
      .getAllCategory1Id(id)
      .then((result) => setTotalItem(result.data.data));

      categoryService.getById(id).then((result) => setCat(result.data.data));

  }, [items]);

  

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

  const [count, setCount] = useState(1);
  const add = () => setCount(count + 1);
  const remove = () => setCount(count - 1);
  const addKg = () => setCount(count + 0.5);
  const removeKg = () => setCount(count - 0.5);

  let addToCart = (itemId) => {
    let cartService = new CartService();
    const values = {
      userId: 56,
      itemId: itemId,
      count: count,
    };
    cartService.add(values).then((result) => {
      addToast(result.data.message, {
        appearance: result.data.success ? "success" : "error",
        autoDismiss: true,
      });
    });
  };

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Items</Breadcrumb.Item>
        <Breadcrumb.Item active>{cat.categoryName}</Breadcrumb.Item>
        <br />
        <>32 Ürün listeleniyor</>
      </Breadcrumb>
      <Container initial={{ y: -700 }} animate={{ y: 0 }}>
        {items.map((item) => (
          <Card
            key={item.id}
            style={{
              width: "18rem",
              display: "inline-block",
              margin: "20px",
              padding: "10px",
              height: "400px",
              maxHeight: "400px",
              width: "200px",
              maxWidth: "200px",
            }}
          >
            {item.imageUrl ? (
              <Card.Img
                style={{ height: "150px" }}
                variant="top"
                src={item.imageUrl}
              />
            ) : (
              <Card.Img
                style={{ height: "150px" }}
                variant="top"
                src="https://davutsahin.net/wp-content/uploads/2020/10/gorsel-hazirlaniyor-600x400-1-375x195.png"
              />
            )}
            <Card.Body>
              <Card.Title
                style={{
                  height: "50px",
                  overflow: "hidden",
                  fontSize: "medium",
                }}
              >
                {item.itemName}
              </Card.Title>
              <Card.Title
                style={{ height: "50px", overflow: "hidden", color: "blue" }}
              >
                {item.unitPrice} ₺ <br />
                <span
                  className="text-muted"
                  style={{ textDecoration: "line-through" }}
                >
                  {roll(item.unitPrice + item.unitPrice * 0.15, 2)} ₺
                </span>
              </Card.Title>

              <AddRemove>
                <FlexContainer>
                  <Flex className="border">
                    {item.category1 === 2 ||
                    item.category1 === 6 ||
                    item.category1 === 12 ||
                    item.category1 === 18 ? (
                      <Buttonn onClick={removeKg} disabled={count === 1}>
                        -
                      </Buttonn>
                    ) : (
                      <Buttonn onClick={remove} disabled={count === 1}>
                        -
                      </Buttonn>
                    )}
                    {item.category1 === 2 ||
                    item.category1 === 6 ||
                    item.category1 === 12 ||
                    item.category1 === 18 ? (
                      <Buttonn>{count} Kilo</Buttonn>
                    ) : (
                      <Buttonn>{count} Adet</Buttonn>
                    )}
                    {item.category1 === 2 ||
                    item.category1 === 6 ||
                    item.category1 === 12 ||
                    item.category1 === 18 ? (
                      <Buttonn onClick={addKg}>+</Buttonn>
                    ) : (
                      <Buttonn onClick={add}>+</Buttonn>
                    )}
                  </Flex>
                </FlexContainer>
              </AddRemove>

              <Button
                className="mt-2"
                variant="success"
                onClick={() => addToCart(item.id)}
                style={{ backgroundColor: "#1d398d" }}
              >
                Sepete ekle
                <MdAddShoppingCart className="ms-2" size="20px" />
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
      <Pagination style={{ marginLeft: "35%" }} size="lg">
        <Pagination.First onClick={first} disabled={pageNo === 1} />
        <Pagination.Prev onClick={prev} disabled={pageNo === 1} />
        <Pagination.Item>
          {pageNo} | {totalPages}
        </Pagination.Item>
        <Pagination.Next onClick={next} disabled={pageNo === totalPages} />
        <Pagination.Last onClick={last} disabled={pageNo === totalPages} />
      </Pagination>
    </div>
  );
}
