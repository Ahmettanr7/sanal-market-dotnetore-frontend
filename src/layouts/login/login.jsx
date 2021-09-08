import React from "react";
import loginImg from "../../assets/login.svg";

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
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Kullanıcı adı</label>
              <input type="text" name="username" placeholder="Kullanıcı adı" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Parola</label>
              <input type="password" name="password" placeholder="Parola" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn2 mt-3">
            Giriş Yap
          </button>
        </div>
      </div>
    );
  }
}
