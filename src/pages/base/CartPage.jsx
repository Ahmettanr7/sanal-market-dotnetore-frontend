import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Address from "../../layouts/Cart/Address";
import CartDetail from "../../layouts/Cart/CartDetail";

export default function CartPage() {
  return (
    <div>
      <Container className="bg-light p-3">
        <Row>
          <Col sm={7}>
            <CartDetail/>
          </Col>
          <Col sm={5}>
            <Address />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
