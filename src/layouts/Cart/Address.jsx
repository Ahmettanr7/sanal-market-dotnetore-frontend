import React, { useState, useEffect } from "react";
import { Form, Button, Container, FloatingLabel } from "react-bootstrap";
import AddressService from "../../services/AddressService";
import { Formik, useFormik } from "formik";
import { useToasts } from "react-toast-notifications";
import CartService from "../../services/CartService";
import OrderService from "../../services/OrderService";
import UserService from "../../services/UserService";
import LocalStorageService from "../../services/LocalStorageService";

export default function Address() {
  const { addToast } = useToasts();
  const [address, setAddress] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [towns, setTowns] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    let userService = new UserService();
    let localStorageService = new LocalStorageService();
    userService
      .getByEmail(localStorageService.get("email"))
      .then((result) => setUser(result.data.data));
  }, []);

  useEffect(() => {
    let addressService = new AddressService();
    let cartService = new CartService();
    addressService
      .getAddressByUserId(user.id)
      .then((result) => setAddress(result.data.data));

    addressService
      .getAllCountries()
      .then((result) => setCountries(result.data.data));

    addressService
      .getCitiesByCountryId(formik.values.countryId)
      .then((result) => setCities(result.data.data));

    addressService
      .getTownsByCityId(formik.values.cityId)
      .then((result) => setTowns(result.data.data));

    addressService
      .getDistrictsByTownId(formik.values.townId)
      .then((result) => setDistricts(result.data.data));

    cartService
      .getTotalCartPrice(user.id)
      .then((result) => setTotalCartPrice(result.data.data));
  }, [user, totalCartPrice]);

  let addressService = new AddressService();
  const formik = useFormik({
    initialValues: {
      userId: 1,
      countryId: 1,
      cityId: 42,
      townId: 732,
      districtId: 22147,
      postalCode: "",
      addressText: ""
    },
    onSubmit: (values) => {
      values.userId = JSON.stringify(user.id);

      addressService.addAddress(values).then((result) =>
        addToast(result.data.message, {
          appearance: result.data.success ? "success" : "error",
          autoDismiss: true,
        }
        )
      )
      console.log(values);
    },
  });

  const formik2 = useFormik({
    initialValues: {
      id: ""
    },
  });

  let orderService = new OrderService();
  const formik3 = useFormik({
    initialValues: {
      userId: "",
      addressId: "",
    },
    onSubmit: (values) => {
      values.userId = user.id;
      values.addressId = formik2.values.id;
      orderService.add(values).then((result) =>
        addToast(result.data.message, {
          appearance: result.data.success ? "success" : "error",
          autoDismiss: true,
        })(result.data.success && window.location.assign("/"))
      );
    },
  });

  function roll(value, step) {
    step = Math.pow(10, step);
    return Math.round(value * step) / step;
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid gray",
        borderRadius: "10px",
      }}
    >
      <h4 className="p-3 text-purple">ADRES</h4>
      <Container>
        <p className="text-muted" style={{ textAlign: "justify" }}>
          Siparişin getirileceği adresi seçiniz. Siparişiniz kayıtlı adreslerden
          farklı adrese gelecekse yeni adres ekleyiniz.
        </p>
      </Container>

      <Formik>
        <Form onSubmit={formik2.handleSubmit}>
          <Form.Label className="m-4">
            <h4 className="text-bg">Kayıtlı Adreslerim</h4>
          </Form.Label>
          <FloatingLabel
            controlId="floatingSelect"
            label="Siparişin gönderileceği adresi seçiniz"
          >
            <Form.Select
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
              id="id"
              value={formik2.values.id}
            >
              {address.map((address, index) => (
                <option key={index} value={address.id}>
                  {address.addressText}
                </option>
              ))}
            </Form.Select>
          </FloatingLabel>
        </Form>
      </Formik>

      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Label className="m-4">
            <h4 className="text-bg">Yeni Adres ekle</h4>
          </Form.Label>

          <Form.Select
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="countryId"
            value={formik.values.countryId}
          >
            {countries.map((country,index) => (
              <option value={country.id} key={index}>
                {country.countryName}
              </option>
            ))}
          </Form.Select>
          <Form.Label>Şehir</Form.Label>
          <Form.Select
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="cityId"
            value={formik.values.cityId}
          >
            {cities.map((city,index) => (
              <option value={city.id} key={index}>
                {city.cityName}
              </option>
            ))}
          </Form.Select>
          <Form.Label>İlçe</Form.Label>
          <Form.Select
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="townId"
            value={formik.values.townId}
          >
            {towns.map((town, index) => (
              <option value={town.id} key={index}>
                {town.townName}
              </option>
            ))}
          </Form.Select>
          <Form.Label>Mahalle</Form.Label>
          <Form.Select
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="districtId"
            value={formik.values.districtId}
          >
            {districts.map((district, index) => (
              <option value={district.id} key={index}>
                {district.districtName}
              </option>
            ))}
          </Form.Select>
          <Form.Group
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.postalCode}
            className="mb-3"
          >
            <Form.Label>Posta Kodu</Form.Label>
            <Form.Control
              type="text"
              placeholder="Posta Kodu"
              id="postalCode"
            />
          </Form.Group>
          <Form.Group
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.addressText}
            className="mb-3"
          >
            <Form.Label>Adres Açıklaması</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="MAHALLE / SOKAK / DAİRA NO / POSTAKODU / İLÇE / İL"
              id="addressText"
            />
          </Form.Group>
          <Button
            type="submit"
            style={{ backgroundColor: "#006666", borderRadius: "10px" }}
          >
            Adresi Kaydet
          </Button>
        </Form>
      </Formik>

      {/* <div>
        <h4 className="p-3 text-purple">SİPARİŞ ÖZETİ</h4>
        <Form.Label>Sipariş Adresi</Form.Label>
        <Form.Select value={formik2.values.id}>
          {address.map((address, index) => (
            <option key={index} value={address.id}>
              {address.addressText}
            </option>
          ))}
        </Form.Select>
        <Form.Text>
          Sadece bilgi amaçlıdır. Değişikliği Kayıtlı adreslerim bölümünden
          yapabilirsiniz.
        </Form.Text>
        <div className="d-flex justify-content-center">
          {totalCartPrice && (
            <span className="m-5">
              <Form.Label>Ödenecek Tutar</Form.Label> <br />
              <span style={{ color: "blue" }}>
                {" "}
                {roll(totalCartPrice?.totalCartPrice, 2)} ₺
              </span>
            </span>
          )}
        </div>
      </div> */}
      <div className="d-flex justify-content-end p-4">
        <Formik>
          <Form onSubmit={formik3.handleSubmit}>
            <Button type="submit" variant="success">
              Siparişi Onayla ve Ana Sayfaya Dön
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
