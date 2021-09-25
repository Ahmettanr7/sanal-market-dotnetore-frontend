import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import OrderDetailService from "../../services/OrderDetailService"

export default function OrderHistoryDetail() {
    let { orderId } = useParams();

    const [orderDetail, setOrderDetail] = useState([]);
  
    useEffect(() => {
        let orderDetailService = new OrderDetailService();
        orderDetailService
        .getByOrderId(orderId)
        .then((result) => setOrderDetail(result.data.data));
    }, []);

    function roll(value, step) {
      step = Math.pow(10, step);
      return Math.round(value * step) / step;
    }
    return (
        <div>
            <Table
            style={{marginTop:"50px"}}
            striped bordered hover variant="light">
  <thead>
    <tr>
      <th>Ürün Id</th>
      <th>Barkod</th>
      <th>Marka</th>
      <th>Ürün Adı</th>
      <th>Birim Fiyatı</th>
      <th>Sipariş Adedi</th>
    </tr>
  </thead>
  <tbody>
  {orderDetail.map((order, index) => (
    <tr key={index}>
      <td>{order.itemId}</td>
      <td>{order.itemCode}</td>
      <td>{order.brand}</td>
      <td>{order.itemName}</td>
      <td>{roll(order.unitPrice,2)} ₺</td>
      <td>{order.count}</td>
    </tr>
  ))}
  </tbody>
</Table>

<Button
as={NavLink}
to={`/order-history`}
className="float-end">Geri Dön</Button>
        </div>
    )
}
