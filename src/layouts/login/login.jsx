import { Formik, Form, Field } from "formik";
import React from "react";
import loginImg from "../../assets/login.svg";
import AuthService from "../../services/AuthService";
import LocalStorageService from "../../services/LocalStorageService";
import { useToasts } from "react-toast-notifications";
export default function Login() {

    const { addToast } = useToasts();

    return (
      <div className="bigBox">
      <div className="box">
        <div className="container">
        <div className="base-container">
        <div className="header">Giriş Yap</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <Formik
            initialValues={{ email: "", password: "", rememberMe: 0 }}
            onSubmit={(values) => {
              let authService = new AuthService();
              let localStorageService = new LocalStorageService();
              if (
                localStorageService.get("rememberMeEmail") &&
                localStorageService.get("rememberMePassword")
              ) {
                values.email = localStorageService.get("rememberMeEmail");
                values.password = localStorageService.get("rememberMePassword");
                values.rememberMe = values.rememberMe.toLocaleString();
              } else {
                values.email = values.email;
                values.password = values.password;
                values.rememberMe = values.rememberMe.toLocaleString();
              }

              authService
                .login(values)
                .then(
                  (result) =>
                    localStorageService.set("token", result.data.data.token) ,
                  setTimeout(function () {
                    localStorageService.getToken() &&
                      localStorageService.set("email", values.email);
                  }, 100) && (localStorageService.getToken() && addToast("Giriş Yapıldı", {
                    appearance: "success",
                    autoDismiss: true,
                }))
                 ,
                    addToast("Doğrulama hatası. Verilerinizi kontrol ederek tekrar deneyiniz.", {
                               appearance: "error",
                               autoDismiss: true,
                           })
                )
                .then(
                  values.rememberMe != 0
                    ? localStorageService.set("rememberMeEmail", values.email)
                    : localStorage.removeItem("rememberMeEmail"),
                  values.rememberMe != 0
                    ? localStorageService.set(
                        "rememberMePassword",
                        values.password
                      )
                    : localStorageService.remove("rememberMePassword")
                )
                .then(
                  setTimeout(function () {
                    localStorageService.getToken() &&
                      window.location.assign("/");
                  }, 100)
                );
            }}
          >
            {localStorage.getItem("rememberMeEmail") ? (
              <Form clasName="form">
                <div hidden className="mt-3">
                  <Field
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={localStorage.getItem("rememberMeEmail")}
                  />
                </div>
                <div hidden className="mt-3">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Parola"
                    value={localStorage.getItem("rememberMePassword")}
                  />
                </div>
                <div className="mt-5">
                 <span className="text-purple">{localStorage.getItem("rememberMeEmail")}</span> <br/>
                 olarak giriş yapılacak.
                  </div>
                  <div className="m-2">
                  <Field type="checkbox" name="rememberMe" value="1" />
                  <span className="ms-2">Beni hatırla!</span>
                </div>
                <div className="footer">
                  <button type="submit" className="btn2 mt-3">
                    Giriş Yap
                  </button>
                </div>
                <div className="d-flex justify-content-center text-muted m-1">veya</div>
                <div className="mt-1">
                  <button
                onClick={() => setTimeout(function () {
                  localStorage.clear(); window.location.reload();
                }, 50)}
                >Hesap Değiştir</button>
                </div>
              </Form>
            ) : (
              <Form clasName="form">
                <div className="mt-3">
                  <Field type="text" name="email" placeholder="Email" />
                </div>
                <div className="mt-3">
                  <Field type="password" name="password" placeholder="Parola" />
                </div>

                <div className="m-2">
                  <Field type="checkbox" name="rememberMe" value="1" />
                  <span className="ms-2">Beni hatırla!</span>
                </div>
                <div className="footer">
                  <button type="submit" className="btn2 mt-3">
                    Giriş Yap
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      </div>
      </div>
      </div>
    )
}
