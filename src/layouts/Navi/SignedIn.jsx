import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Nav, Image } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
import LocalStorageService from "../../services/LocalStorageService";
import UserService from "../../services/UserService";
import { FaUserCircle } from 'react-icons/fa'

export default function SignedIn() {
  const { addToast } = useToasts();

  const [user, setuser] = useState({});

  useEffect(() => {
    let userService = new UserService();
    let localStorageServie = new LocalStorageService();
    userService
      .getByEmail(localStorageServie.get("email"))
      .then((result) => setuser(result.data.data));
  }, [user]);

  let localStorageService = new LocalStorageService();
  function logOut(){
    localStorageService.clean()
     addToast("Başarıyla çıkış yapıldı", {
            appearance: "success",
            autoDismiss: true,
          })
     window.location.assign("/")
   }

  return (
    <div>
      <Nav.Item>
        <Dropdown>
        <div className="d-flex justify-content-rounded">
          <Dropdown.Toggle variant="light" id="dropdown-basic">
          <FaUserCircle className="mx-2" size="30px" color="#1d398d" />
              {user.firstName} {user.lastName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={NavLink} to="/asd" className="justify-content-end">
            Bilgilerim  
            </Dropdown.Item>
            <Dropdown.Item onClick={logOut}>
              Çıkış Yap
            </Dropdown.Item>
          </Dropdown.Menu>
          </div>
        </Dropdown>
      </Nav.Item>
    </div>
  );
}
