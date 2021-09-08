import React, { useState, useEffect } from "react";
import { Button, ListGroup, Image } from "react-bootstrap";
import CartService from "../../services/CartService";
import { Buttonn, AddRemove, FlexContainer, Flex } from "../../Styles";
import { useToasts } from "react-toast-notifications";

export default function CartDetail() {
  const { addToast } = useToasts();
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState([]);

  useEffect(() => {
    let cartService = new CartService();
    cartService
      .getByUserIdAndCartStatusIsTrue(56)
      .then((result) => setCartItems(result.data.data));

    cartService
      .getTotalCartPrice(56)
      .then((result) => setTotalCartPrice(result.data.data));
  }, [totalCartPrice]);

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

  function roll(value, step) {
    step = Math.pow(10, step);
    return Math.round(value * step) / step;
  }
  return (
    <div>
            <div
              style={{
                backgroundColor: "white",
                border: "1px solid gray",
                borderRadius: "10px",
              }}
            >
              <ListGroup>
                <h4 className="p-3 text-purple">SEPET</h4>
                {cartItems.map((cart, index) => (
                  <ListGroup.Item action key={index}>
                    <div className="d-flex justify-content-end">
                      <Buttonn onClick={() => delete_(cart.id)}>x</Buttonn>
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
                        <FlexContainer style={{ justifyContent: "center" }}>
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
                              <Buttonn onClick={() => increaseKg(cart.item.id)}>
                                +
                              </Buttonn>
                            ) : (
                              <Buttonn onClick={() => increaseAd(cart.item.id)}>
                                +
                              </Buttonn>
                            )}
                          </Flex>
                        </FlexContainer>
                      </AddRemove>
                      =
                      <span className="ms-1 w-100">
                        <b>{roll(cart.lineTotal, 2)} ₺ </b>
                      </span>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <div className="d-flex justify-content-end">
                {totalCartPrice ? (
                  <span className="m-5">
                    Toplam :{" "}
                    <span style={{ color: "blue" }}>
                      {" "}
                      {roll(totalCartPrice?.totalCartPrice, 2)} ₺
                    </span>
                  </span>
                ) : (
                  <span className="m-5">
                    Toplam : <span style={{ color: "blue" }}> 0 ₺</span>
                  </span>
                )}
              </div>
            </div>
    </div>
  );
}
