import React from "react";
import { Col, Row } from "react-bootstrap";
import { Route } from "react-router-dom";
import AdminNavi from "../../layouts/Admin/adminNavi/AdminNavi";
import CategoryAdd from "../../layouts/Admin/CategoryAdd/CategoryAdd";
import CategoryManagement from "../../layouts/Admin/CategoryManagement/CategoryManagement";
import DeliveredIsFalse from "../../layouts/Admin/Delivered/DeliveredIsFalse/DeliveredIsFalse";
import OrderDetails from "../../layouts/Admin/Delivered/DeliveredIsFalse/OrderDetails";
import DeliveredIsTrue from "../../layouts/Admin/Delivered/DeliveredIsTrue/DeliveredIsTrue";
import ItemAdd from "../../layouts/Admin/itemAdd/ItemAdd";
import AdminItemSearchList from "../../layouts/Admin/itemManagement/AdminItemSearchList";
import ItemNameSearch from "../../layouts/Admin/itemManagement/ItemNameSearch";

export default function AdminPage() {
  return (
    <div>
      <Row>
        <Col sm={"3"}>
            
          <AdminNavi
            li={[
              [
                "Ürün Ekle",
                "https://res.cloudinary.com/ahmettanrikulu/image/upload/v1630325078/eCommerce/add_wrqeb1.svg",
                "/admin/itemAdd",
              ],
              [
                "Ürün Yönetimi",
                "https://res.cloudinary.com/ahmettanrikulu/image/upload/v1630346770/eCommerce/edit_begty1.png",
                "/admin/itemManagement",
              ],
              [
                "Kategori Ekle",
                "https://res.cloudinary.com/ahmettanrikulu/image/upload/v1630325078/eCommerce/add_wrqeb1.svg",
                "/admin/categoryAdd",
              ],
              [
                "Kategori Yönetimi",
                "https://res.cloudinary.com/ahmettanrikulu/image/upload/v1630346770/eCommerce/edit_begty1.png",
                "/admin/categoryManagement",
              ],
              [
                "Bekleyen Siparişler",
                "https://res.cloudinary.com/ahmettanrikulu/image/upload/v1630361753/eCommerce/wait_kdtpvv.png",
                "/admin/deliveredFalse",
              ],
              [
                "Teslim Edilen Siparişler",
                "https://res.cloudinary.com/ahmettanrikulu/image/upload/v1630361852/eCommerce/delivered_dntcun.png",
                "/admin/deliveredTrue",
              ],
            ]}
          />
        </Col>
        <Col  sm={"8"}>
        <Route exact path="/admin/itemAdd" component={ItemAdd} />
        <Route exact path="/admin/itemManagement" component={ItemNameSearch} />
        <Route exact path="/admin/itemManagement/:itemName" component={ItemNameSearch} />
        <Route exact path="/admin/itemManagement/:itemName" component={AdminItemSearchList} />
        <Route exact path="/admin/categoryAdd" component={CategoryAdd} />
        <Route exact path="/admin/categoryManagement" component={CategoryManagement} />
        <Route exact path="/admin/deliveredFalse" component={DeliveredIsFalse} />
        <Route exact path="/admin/deliveredTrue" component={DeliveredIsTrue} />
        <Route exact path="/admin/deliveredFalse/:orderId" component={OrderDetails} />
        </Col>
      </Row>
    </div>
  );
}
