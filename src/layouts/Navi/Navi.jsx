import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Button,
  Form,
  Container,
  FormControl,
  ListGroup,
  Image,
} from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import { AiFillLeftCircle } from "react-icons/ai";
import CartService from "../../services/CartService";
import {
  SearchButton,
  Buttonn,
  AddRemove,
  FlexContainer,
  Flex,
} from "../../Styles";
import { Formik, useFormik } from "formik";
import { Offcanvas } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import SignedIn from "./SignedIn";
import SignOut from "./SignOut";
import { useToasts } from "react-toast-notifications";

export default function Navi() {
  const { addToast } = useToasts();
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState([]);

  useEffect(() => {
    let cartService = new CartService();
      cartService
      .getTotalCartPrice(56)
      .then((result) => setTotalCartPrice(result.data.data));
  }, [totalCartPrice]);
  
  useEffect(() => {
    let cartService = new CartService();
    cartService
      .getByUserIdAndCartStatusIsTrue(56)
      .then((result) => setCartItems(result.data.data));
  }, [cartItems]);

  const formik = useFormik({
    initialValues: {
      itemName: "",
    },
    onSubmit: (values) => {
      window.location.href = `/search/${values.itemName}`;
    },
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let delete_ = (id) => {
    let cartService = new CartService();
    cartService.delete(id).then((result) => {
      addToast(result.data.message, {
        appearance: result.data.success ? "success" : "error",
        autoDismiss: true,
      });
    });
  };

  let decreaseAd = (itemId) => {
    let cartService = new CartService();
    cartService.decreaseAd(56, itemId).then((result) => {
      addToast(result.data.message, {
        appearance: result.data.success ? "success" : "error",
        autoDismiss: true,
      });
    });
  };

  let increaseAd = (itemId) => {
    let cartService = new CartService();
    cartService.increaseAd(56, itemId).then((result) => {
      addToast(result.data.message, {
        appearance: result.data.success ? "success" : "error",
        autoDismiss: true,
      });
    });
  };

  let decreaseKg = (itemId) => {
    let cartService = new CartService();
    cartService.decreaseKg(56, itemId).then((result) => {
      addToast(result.data.message, {
        appearance: result.data.success ? "success" : "error",
        autoDismiss: true,
      });
    });
  };

  let increaseKg = (itemId) => {
    let cartService = new CartService();
    cartService.increaseKg(56, itemId).then((result) => {
      addToast(result.data.message, {
        appearance: result.data.success ? "success" : "error",
        autoDismiss: true,
      });
    });
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const history = useHistory();

  function handlerSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handlerSignIn() {
    setIsAuthenticated(true);
  }

  function roll(value, step) {
    step = Math.pow(10, step);
    return Math.round(value * step) / step;
  }

  return (
    <div
      style={{ boxShadow: "5px", backgroundColor: "rgba(192, 192, 192, 0.1)" }}
    >
      <Container>
        <Navbar expand="lg">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>

          {/* Marka */}

          <Navbar.Brand href="/" className="p-4">
            TANNET SANAL MARKET
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          {/* Arama */}

          <Formik>
            <Form onSubmit={formik.handleSubmit} className="d-flex w-25 ms-5">
              <FormControl
                type="search"
                name="itemName"
                placeholder="Ne Aramıştınız ? "
                aria-label="Search"
                // normalize={(value) => (value || "").toLocaleLowerCase()}
                value={formik.values.itemName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <SearchButton type="submit">Ara</SearchButton>
            </Form>
          </Formik>

            {/* Giriş ve Kayıt Olma */}

          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            {isAuthenticated ? (
              <SignedIn signOut={handlerSignOut} />
            ) : (
              <SignOut signIn={handlerSignIn} />
            )}


              {/* Sipariş Listesi 'SEPET' */}
              
            <Nav.Item>
              <Button className="m-3" variant="light" onClick={handleShow}>
                <TiShoppingCart size="30px" color="#666666" />
                <span className="mx-2">
                  Sipariş Listesi
                  <span className="m-2" style={{ color: "#1d398d" }}>
                    <b>{cartItems.length}</b>
                  </span>
                  <AiFillLeftCircle className="ms-2" color="#666666" />
                </span>
              </Button>
              <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <TiShoppingCart
                      className="m-2"
                      size="40px"
                      color="#666666"
                    />
                    Sipariş Listem
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {totalCartPrice ? (
                    <ListGroup>
                      {cartItems.map((cart) => (
                        <ListGroup.Item action key={cart.id}>
                          <div className="d-flex justify-content-end">
                            <Buttonn onClick={() => delete_(cart.id)}>
                              x
                            </Buttonn>
                          </div>
                          <div className="d-flex justify-content-center">
                            {cart.item.imageUrl ? (
                              <Image
                                style={{ height: "50px" }}
                                src={cart.item.imageUrl}
                              />
                            ) : (
                              <Image
                                style={{ height: "50px" }}
                                src="https://davutsahin.net/wp-content/uploads/2020/10/gorsel-hazirlaniyor-600x400-1-375x195.png"
                              />
                            )}
                          </div>
                          <div className="d-flex justify-content-center">
                            {cart.item.itemName}
                          </div>
                          <div className="d-flex justify-content-center">
                            <span style={{ fontSize: "small", width: "100%" }}>
                              Birim Fiyatı :{" "}
                              <span>
                                <b>{roll(cart.item.unitPrice, 2)} ₺</b>
                              </span>
                            </span>
                            <AddRemove>
                              <FlexContainer>
                                <Flex className="border">
                                  {cart.item.category1 === 2 ||
                                  cart.item.category1 === 6 ||
                                  cart.item.category1 === 12 ||
                                  cart.item.category1 === 18 ? (
                                    <Buttonn
                                      onClick={() => decreaseKg(cart.item.id)}
                                      disabled={cart.count === 1}
                                    >
                                      -
                                    </Buttonn>
                                  ) : (
                                    <Buttonn
                                      onClick={() => decreaseAd(cart.item.id)}
                                      disabled={cart.count === 1}
                                    >
                                      -
                                    </Buttonn>
                                  )}
                                  {cart.item.category1 === 2 ||
                                  cart.item.category1 === 6 ||
                                  cart.item.category1 === 12 ||
                                  cart.item.category1 === 18 ? (
                                    <Buttonn>{cart.count} Kilo</Buttonn>
                                  ) : (
                                    <Buttonn>{cart.count} Adet</Buttonn>
                                  )}
                                  {cart.item.category1 === 2 ||
                                  cart.item.category1 === 6 ||
                                  cart.item.category1 === 12 ||
                                  cart.item.category1 === 18 ? (
                                    <Buttonn
                                      onClick={() => increaseKg(cart.item.id)}
                                    >
                                      +
                                    </Buttonn>
                                  ) : (
                                    <Buttonn
                                      onClick={() => increaseAd(cart.item.id)}
                                    >
                                      +
                                    </Buttonn>
                                  )}
                                </Flex>
                              </FlexContainer>
                            </AddRemove>
                            =
                            <span className="ms-1">
                              <b>{roll(cart.lineTotal, 2)} ₺ </b>
                            </span>
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  ) : (
                    <div className="d-flex justify-content-center">
                      <h6>Sepetinizde ürün bulunmamaktadır.</h6>
                    </div>
                  )}
                  {totalCartPrice && (
                    <div className="d-flex justify-content-center">
                      <span className="m-5">
                        Toplam :{" "}
                        <span style={{ color: "blue" }}>
                          {" "}
                          {roll(totalCartPrice?.totalCartPrice, 2)} ₺
                        </span>
                      </span>
                    </div>
                  )}
                  {totalCartPrice && (
                    <div className="d-flex justify-content-center">
                      <Button as={NavLink} to="/cart" onClick={handleClose}>
                        Alışverişi Tamamla
                      </Button>
                    </div>
                  )}
                </Offcanvas.Body>
              </Offcanvas>
            </Nav.Item>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
