import React from "react";
import { Col, Row } from "react-bootstrap";
import { Route } from "react-router-dom";
import CategoryList from "../../layouts/base/CategoryList";
import ItemList from "../../layouts/base/ItemList";
import ItemSearchList from "../../layouts/base/ItemSearchList";

export default function ItemListPage() {
  return (
    <div>
      <Row>
        <Col sm={1}></Col>
        <Col sm={2}>
          <Route exact path="/items/:id" component={CategoryList} />
          <Route exact path="/search/:itemName" component={CategoryList} />
        </Col>
        <Col sm={8}>
          <Route exact path="/items/:id" component={ItemList} />
          <Route exact path="/search/:itemName" component={ItemSearchList} />
        </Col>
        <Col sm={1}>
          <Route exact path="/items/:id" />
          <Route exact path="/search/:itemName" />
        </Col>
      </Row>
    </div>
  );
}
