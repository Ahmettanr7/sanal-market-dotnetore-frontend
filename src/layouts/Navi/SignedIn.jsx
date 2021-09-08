import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Nav, Image } from "react-bootstrap";
import UserService from "../../services/UserService";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Nav.Item>
        <Dropdown>
        <div className="d-flex justify-content-rounded">
          <Dropdown.Toggle variant="light" id="dropdown-basic">
              <Image
                fluid
                className="rounded-circle"
                style={{ width: "30px", height: "30px", marginRight:"10px" }}
                src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623079064/rlcbpiy0y37s7ysdy1u5.jpg"
              />
              
               Ahmet Tanrıkulu
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={NavLink} to="/asd" className="justify-content-end">
            Bilgilerim  
            </Dropdown.Item>
            <Dropdown.Item onClick={signOut}>
              Çıkış Yap
            </Dropdown.Item>
          </Dropdown.Menu>
          </div>
        </Dropdown>
      </Nav.Item>
    </div>
  );
}
