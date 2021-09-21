import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LocalStorageService from "../../services/LocalStorageService";
import OrderDetailService from "../../services/OrderDetailService";
import UserService from "../../services/UserService";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    let userService = new UserService();
    let localStorageService = new LocalStorageService();
    userService
      .getByEmail(localStorageService.get("email"))
      .then((result) => setUser(result.data.data));
  }, []);

  useEffect(() => {
    let orderService = new OrderDetailService();
    orderService
      .getOrderHistoryByUserId(user.id)
      .then((result) => setOrders(result.data.data));
  }, [user]);

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
      <Table id="orderHistory" striped hover variant="light">
        <thead>
          <tr>
            <th>Sipariş Numarası</th>
            <th>Sipariş Tarihi</th>
            <th>Sipariş Tutarı</th>
            <th>Sipariş Adresi</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.orderId}</td>
              <td>{order.date_}</td>
              <td>{roll(order.totalPrice, 2)} ₺</td>
              <td>{order.addressText}</td>

              <td style={{ width: "150px" }}>
                <Button
                  as={NavLink}
                  to={`/order-history/order-detail/${order.orderId}`}
                  variant="success"
                >
                  Sipariş Detayı
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
