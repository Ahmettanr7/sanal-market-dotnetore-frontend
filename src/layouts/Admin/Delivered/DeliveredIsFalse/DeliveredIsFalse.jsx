import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import OrderDetailService from '../../../../services/OrderDetailService';
import OrderService from '../../../../services/OrderService';
import { useToasts } from "react-toast-notifications";
import { NavLink } from 'react-router-dom';

export default function DeliveredIsFalse() {

    const { addToast } = useToasts();

    const [orders, setOrders] = useState([]);

    let orderService = new OrderDetailService();
    let orderCRUDService = new OrderService();

    useEffect(() => {
      orderService.getByIsDeliveredIsFalse().then((result) => setOrders(result.data.data));
    }, [orders]);

    let wasDelivered = (orderId) => {
      orderCRUDService.wasDelivered(orderId).then((result) => {
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
        <div
        style={{
          marginTop:"25px"  
        }}
        >
            <Table
            striped  hover variant="light">
  <thead>
    <tr>
      <th>Id</th>
      <th>Müşteri Id</th>
      <th>Müşteri Ad-Soyad</th>
      <th>Sipariş Tarihi</th>
      <th>Sipariş Tutarı</th>
      <th>Sipariş Adresi</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  {orders.map((order, index) => (
    <tr key={index}>
      <td>{order.orderId}</td>
      <td>{order.userId}</td>
      <td>{order.firstName} {order.lastName}</td>
      <td>{order.date_}</td>
      <td>{roll(order.totalPrice, 2)} ₺</td>
      <td>{order.addressText}</td>
      <td style={{width:"150px"}}><Button  as={NavLink} to={`/admin/deliveredFalse/${order.orderId}`} variant="warning">Siparişleri Gör</Button></td>
      <td style={{width:"200px"}}>
        <Button
        onClick={() => wasDelivered(order.orderId)}
        variant="success">Gönderildi Olarak İşaretle</Button>
      </td>
    </tr>
    ))}
  </tbody>
</Table>
        </div>
    )
}
