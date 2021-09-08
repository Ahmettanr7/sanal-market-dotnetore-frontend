import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import CarouselLayout from '../../layouts/base/CarouselLayout'
import CategoryList from '../../layouts/base/CategoryList'

export default function FirstPage() {
    return (
        <div>
            <Row>
        <Col sm={1}></Col>
        <Col sm={2}>
          <Route exact path="/" component={CategoryList} />
        </Col>
        <Col sm={8}>
          <Container>
            <Route exact path="/" component={CarouselLayout} />
          </Container>
        </Col>
        <Col sm={1}></Col>
      </Row>
        </div>
    )
}
