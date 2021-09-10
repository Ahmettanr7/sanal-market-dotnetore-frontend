import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import OrderDetailService from "../../../../services/OrderDetailService";

export default function DeliveredIsTrue(){

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    let orderService = new OrderDetailService();
    orderService
      .getByIsDeliveredIsTrue()
      .then((result) => setOrders(result.data.data));
  }, []);

  function roll(value, step) {
    step = Math.pow(10, step);
    return Math.round(value * step) / step;
  }

  return (
    <div
      style={{
        marginLeft: "-50px",
        marginTop: "25px",
      }}
    >
      <Table id="deliveredİsTrue" striped hover variant="light">
        <thead>
          <tr>
            <th>Id</th>
            <th>Müşteri Id</th>
            <th>Müşteri Ad-Soyad</th>
            <th>Sipariş Tarihi</th>
            <th>Sipariş Tutarı</th>
            <th>Sipariş Adresi</th>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
