import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import OrderService from "../../../../services/OrderService";

export default function DeliveredIsTrue(){

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    let orderService = new OrderService();
    orderService
      .getByIsDeliveredIsTrue()
      .then((result) => setOrders(result.data.data));
  }, []);

  return (
    <div
      style={{
        marginLeft: "-50px",
        marginTop: "25px",
      }}
    >
      <Table id="deliveredİsTrue" striped hover variant="dark">
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
              <td>{order.id}</td>
              <td>{order.user.id}</td>
              <td>{order.user.nameSurname}</td>
              <td>{order.date}</td>
              <td>{order.totalPrice} ₺ </td>
              <td>{order.address.addressText}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
