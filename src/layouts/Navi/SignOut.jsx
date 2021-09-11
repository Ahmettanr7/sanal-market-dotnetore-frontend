import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Nav } from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa'

export default function SignOut() {
    return (
        <div>
            <Nav.Item>
              <Button
            as={NavLink} to='/login'
            className="m-3"
            variant="light">
                <FaUserCircle size="30px" color="#1d398d" />
                <span className="ms-2">Giriş | Kayıt</span>
              </Button>
            </Nav.Item>
        </div>
    )
}