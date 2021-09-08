import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import OrderDetailService from "../../../../services/OrderDetailService"

export default function OrderDetails() {
    let { id } = useParams();

    const [orderDetail, setOrderDetail] = useState([]);
  
    useEffect(() => {
        let orderDetailService = new OrderDetailService();
        orderDetailService
        .getByOrderId(id)
        .then((result) => setOrderDetail(result.data.data));
    }, []);

    return (
        <div>
            <Table
            style={{marginTop:"50px"}}
            striped bordered hover variant="dark">
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
      <td>{order.orderId}</td>
      <td>{order.item.itemCode}</td>
      <td>{order.item.brand}</td>
      <td>{order.item.itemName}</td>
      <td>{order.item.unitPrice}</td>
      <td>{order.count}</td>
    </tr>
  ))}
  </tbody>
</Table>
        </div>
    )
}
