import { Formik, Form, Field } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import loginImg from "../../assets/login.svg";
import AuthService from "../../services/AuthService";
import LocalStorageService from "../../services/LocalStorageService";
export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Giriş Yap</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              let authService = new AuthService();
              let localStorageService = new LocalStorageService();
              authService
                .login(values)
                .then(
                  (result) =>
                    localStorageService.set("token", result.data.data.token),
                  localStorageService.set("email", values.email)
                )
                .then(
                  localStorageService.getToken() && window.location.assign("/")
                );
            }}
          >
            <Form clasName="form">
              <div className="mt-3">
                <Field type="text" name="email" placeholder="Email" />
              </div>
              <div className="mt-3">
                <Field type="password" name="password" placeholder="Parola" />
              </div>
              <div className="footer">
                <button type="submit" className="btn2 mt-3">
                  Giriş Yap
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}
