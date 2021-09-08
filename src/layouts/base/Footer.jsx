import React from "react";
import { Col, Button, Row, Form, FormControl } from "react-bootstrap";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { GrApple } from "react-icons/gr";
import { ImHeadphones } from "react-icons/im";

export default function Footer() {
  return (
    <div style={{ marginTop: "250px", backgroundColor: "#1d398d" }}>
      <Row>
        <Col sm={1}></Col>
        <Col sm={5}>
          <h2 style={{ padding: "30px" }}>
            <a style={{ textDecoration: "none", color: "white" }} href="#">
              <ImHeadphones color="#f5f5f5" className="mx-3" />
              Bize Ulaşın 0(505) 0269866
            </a>
          </h2>
        </Col>
        <Col sm={1}></Col>
        <Col sm={5}>
          <h2 style={{ padding: "30px" }}>
            <a style={{ textDecoration: "none", color: "white" }} href="#">
              Bizi Takip Edin
            </a>{" "}
            <a style={{ textDecoration: "none", color: "white" }} href="#">
              <AiFillFacebook />
            </a>
            <a style={{ textDecoration: "none", color: "white" }} href="#">
              <AiFillInstagram />
            </a>
          </h2>
        </Col>
      </Row>

      <footer className="w-100" style={{ height: "500px" }}>
        <Row>
          <Col className="col" sm={3}>
            <div className="footer-nav">
              <div className="item">
                <a className="footer-title" href="#" target="_self">
                  ÖDEME
                </a>
                <ul>
                  <li>
                    <a href="#" target="_self">
                      Gizlilik Politikası
                    </a>
                  </li>

                  <li>
                    <a href="#" target="_self">
                      Kullanım Koşulları
                    </a>
                  </li>

                  <li>
                    <a href="#" target="_self">
                      Ödeme Seçenekleri
                    </a>
                  </li>

                  <li>
                    <a href="#" target="_self">
                      Satış Sözleşmesi
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col className="col" sm={3}>
            <div className="footer-nav">
              <div className="item">
                <a className="footer-title" href="#" target="_self">
                  KURUMSAL
                </a>
                <ul>
                  <li>
                    <a href="#" target="_self">
                      Hakkımızda
                    </a>
                  </li>

                  <li>
                    <a href="#" target="_self">
                      Güvenlik
                    </a>
                  </li>

                  <li>
                    <a href="#" target="_self">
                      Teslimat ve İade Şartları
                    </a>
                  </li>

                  <li>
                    <a href="#" target="_self">
                      Kargo Seçenekleri
                    </a>
                  </li>

                  <li>
                    <a href="#" target="_self">
                      Kişisel Verilerin Korunması
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col className="col" sm={2}>
            <div className="footer-nav">
              <div className="item">
                <a className="footer-title" href="#" target="_self">
                  İLETİŞİM
                </a>
                <i className="fa fa-angle-down" aria-hidden="true"></i>
                <ul>
                  <li>
                    <a href="#" target="_self">
                      İletişim
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col className="col" sm={4}>
              <div className="ebulletin">
              <div className="title">E-bültene Kayıt Ol!</div>
              <p>
              Hemen Kayıt Ol! Kampanya ve Yeni Ürünlerden ilk senin haberin
              olsun!
            </p>
            <Form id="bultenform" name="bultenform" action="" method="post">
              <FormControl
                type="email"
                className="form-control"
                id="BultenMail"
                placeholder="E-mail adresi yazınız"
                name="BultenMail"
                maxLength="150"
                data-rule-required="true"
                data-rule-email="true"
                data-hata-mesaji="Lütfen geçerli bir e-mail adresi belirtiniz"
              ></FormControl>
              <Button
                type="submit"
                className="btn"
                name="BultenEkle"
                id="BultenEkle"
              >
                Gönder
              </Button>
            </Form>
            <FaGooglePlay cursor="pointer" className="m-4" size="30px" />{" "}
            <GrApple cursor="pointer" className="m-4" size="30px" />
              </div>
          </Col>
        </Row>
      </footer>
    </div>
  );
}
