import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AdminNavi.css"

const AdminNavi = ({ li }) => {
  const [window, setWindow] = useState(false);

  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };

  return (
    <nav className="navbar-menu" style={{ width: window === false ? 300 : 150 }}>
      <div className="burger" onClick={() => openClose()}>
        <Image src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1630324845/eCommerce/menu_zslqzy.svg" alt="burger" />
      </div>
      <ul className="navbar__list">
        {li.map((item, i) => (
          <div className="navbar__li-box" key={i}
          >
            <Image
            width="60px"
              src={item[1]}
              alt={item[1]}
              style={{ paddingLeft: window === false ? 27 : 17 }}
            />
            <Link to={item[2]}>
            <li
              className="navbar__li"
              style={{ display: window === false ? "inline-block" : "none" }}
            >
              {item[0]}
            </li>
            </Link>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default AdminNavi;
