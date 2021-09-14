import { Formik, Form, Field } from "formik";
import React from "react";
import AuthService from "../../services/AuthService";
import LocalStorageService from "../../services/LocalStorageService";
import loginImg from "../../assets/login.svg";
import { useToasts } from "react-toast-notifications";
export default function Register() {

    const { addToast } = useToasts();

    return (
      <div className="bigBox">
      <div className="box">
        <div className="container">
        <div className="base-container mt-5">
        <div className="header">Kayıt Ol</div>
        <div className="content">
        <div className="image">
            <img src={loginImg} />
          </div>
        <Formik
            initialValues={{firstName: "", lastName: "", email: "", password: "" }}
            onSubmit={(values) => {
              let authService = new AuthService();
              let localStorageService = new LocalStorageService();
              authService.register(values)
              .then(
                (result) =>
                  localStorageService.set("token", result.data.data.token) ,
                  setTimeout(function () {
                      localStorageService.set("email", values.email);
                  }, 100) &&
                  (localStorageService.getToken() && addToast("Kayıt İşlemi Başarılı. Giriş Yapıldı", {
                    appearance: "success",
                    autoDismiss: true,
                })),
                    addToast("Doğrulama hatası. Verilerinizi kontrol ederek tekrar deneyiniz.", {
                               appearance: "error",
                               autoDismiss: true,
                           })
                ).then(
                 setTimeout(function(){localStorageService.getToken() && window.location.assign("/"); }, 300)
              )
                ;
            }}
          >
            <Form clasName="form">
            <div className="mt-3">
                <Field type="text" name="firstName" placeholder="Ad" />
              </div>
              <div className="mt-3">
                <Field type="text" name="lastName" placeholder="Soyad" />
              </div>
              <div className="mt-3">
                <Field type="text" name="email" placeholder="Email" />
              </div>
              <div className="mt-3">
                <Field type="password" name="password" placeholder="Parola" />
              </div>
              <div className="footer">
                <button type="submit" className="btn2 mt-3">
                  Kayıt ol
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      </div>
      </div>
      </div>
    )
}
