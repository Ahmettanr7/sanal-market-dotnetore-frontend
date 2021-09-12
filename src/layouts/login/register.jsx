import { Formik, Form, Field } from "formik";
import React from "react";
import AuthService from "../../services/AuthService";
import LocalStorageService from "../../services/LocalStorageService";
import loginImg from "../../assets/login.svg";

export class Register extends React.Component {

  
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="base-container" ref={this.props.containerRef}>
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
                  localStorageService.set("token", result.data.data.token),
                  localStorageService.set("email", values.email)
                  // setTimeout(function(){localStorageService.getToken() &&
                  //    localStorageService.set("email", values.email); }, 300)
              )
              .then(
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
    );
  }
}
