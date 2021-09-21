import React from "react";
import Navi from "../Navi/Navi";
import { Route } from "react-router-dom";
import Footer from "./Footer";
import AdminPage from "../../pages/admin/AdminPage";
import FirstPage from "../../pages/base/FirstPage";
import ItemListPage from "../../pages/base/ItemListPage";
import CartPage from "../../pages/base/CartPage";
import Register from "../Register/Register";
import Login from "../Login/Login";
import OrderHistoryPage from "../../pages/base/OrderHistoryPage";

export default function Dashboard() {
  return (
    <div>
      <Route exact path="/" component={Navi} />
      <Route exact path="/search/:itemName" component={Navi} />
      <Route exact path="/items/:id" component={Navi} />
      <Route exact path="/cart" component={Navi} />
      <Route exact path="/login" component={Navi} />
      <Route exact path="/register" component={Navi} />
      <Route exact path="/order-history" component={Navi} />
      <Route exact path="/order-history/order-detail/:orderId" component={Navi} />

      <Route exact path="/" component={FirstPage} />

      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

      <Route exact path="/cart" component={CartPage} />

      <Route exact path="/admin" component={AdminPage} />
      <Route exact path="/admin/itemAdd" component={AdminPage} />
      <Route exact path="/admin/itemManagement" component={AdminPage} />
      <Route exact path="/admin/categoryAdd" component={AdminPage} />
      <Route exact path="/admin/categoryManagement" component={AdminPage} />
      <Route exact path="/admin/itemManagement/:itemName" component={AdminPage}/>
      <Route exact path="/admin/deliveredFalse" component={AdminPage} />
      <Route exact path="/admin/deliveredTrue" component={AdminPage} />
      <Route exact path="/admin/deliveredFalse/:orderId" component={AdminPage} />

      <Route exact path="/items/:id" component={ItemListPage} />
      <Route exact path="/search/:itemName" component={ItemListPage} />

      <Route exact path="/order-history" component={OrderHistoryPage} />
      <Route exact path="/order-history/order-detail/:orderId" component={OrderHistoryPage} />

      
      <Route exact path="/" component={Footer} />
      <Route exact path="/search/:itemName" component={Footer} />
      <Route exact path="/items/:id" component={Footer} />
      <Route exact path="/cart" component={Footer} />
    </div>
  );
}
