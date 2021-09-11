import { Formik } from "formik";
import { Form } from "react-bootstrap";
import React from "react";

export class Register extends React.Component {

  
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Kayıt Ol</div>
        <div className="content">
          <Formik>
          <Form>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Kullanıcı Adı</label>
              <input type="text" name="username" placeholder="Kullanıcı Adı" />
            </div>
            <Form.Group className="form-group"
            onChange="handleChange"
            value="values.email"
            >
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Email" />
            </Form.Group>
            <div className="form-group">
              <label htmlFor="password">Parola</label>
              <input type="password" name="password" placeholder="Parola" />
            </div>
            <div className="form-group">
              <label htmlFor="nameSurname">Ad Soyad</label>
              <input type="text" name="nameSurname" placeholder="Ad Soyad" />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Cinsiyet</label>
              <input maxLength="1" type="text" name="gender" placeholder="E - K" />
            </div>
            <div className="form-group">
              <label htmlFor="telNr1">Telefon Numarası</label>
              <input maxLength="11" type="text" name="telNr1" />
            </div>
            <div className="form-group">
              <label htmlFor="telNr1">2.Telefon Numarası</label>
              <input maxLength="11" type="text" name="telNr2" />
            </div>
            <div className="form-group">
              <label htmlFor="birthDate">Doğum Tarihi</label>
              <input maxLength="1" type="date" name="gender" />
            </div>
          </div>
          </Form>
          </Formik>
        </div>
        <div className="footer">
          <button type="button" className="btn2 mt-3">
            Kayıt Ol
          </button>
        </div>
      </div>
    );
  }
}
