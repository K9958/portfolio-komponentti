import React from 'react'
import { Container, Navbar, NavDropdown, Offcanvas, Nav } from 'react-bootstrap'

const Navigation = () => {
  const expand = "lg"
  return (
    <>
      <Navbar expand={expand} className="bg-body-tertiary">
        <Container fluid
          style={{ justifyContent: "start" }}
        >
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}
            data-bs-theme="dark"
            className='custom-toggler'
            style={{ border: "none" }}
          />
          <Navbar.Brand href="#"
          >
            <img
              alt=""
              src="./logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Komponentti
          </Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Navigaatio
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand href="#"
            className='shopping-cart'
          >
            <img
              alt=""
              src="./shoppingcart.svg"
              width="23"
              height="30"
              className="d-inline-block align-top"
            />{' '}

          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation