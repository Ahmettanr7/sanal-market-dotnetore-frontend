import React from 'react'
import { Container } from 'react-bootstrap'
import { Route } from 'react-router'
import OrderHistory from '../../layouts/Order/OrderHistory'
import OrderHistoryDetail from '../../layouts/Order/OrderHistoryDetail'

export default function OrderHistoryPage() {
    return (
        <div>
            <Container>
           <Route exact path="/order-history" component={OrderHistory} />
           <Route exact path="/order-history/order-detail/:orderId" component={OrderHistoryDetail} />
           </Container>
        </div>
    )
}
