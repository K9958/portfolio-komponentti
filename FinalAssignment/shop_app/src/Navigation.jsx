import React from 'react'
import { Container, Navbar, NavDropdown, Offcanvas, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const imageURL = "/komponentti/"

const Navigation = () => {
  // eslint-disable-next-line no-unused-vars
  const cartItems = useSelector(state => state.cart)

  const expand = "lg"
  return (
    <>
      <Navbar expand={expand} sticky="top" className="bg-body-tertiary navbar">
        <Container fluid
          className='container'
          style={{ justifyContent: "start" }}
        >
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}
            data-bs-theme="dark"
            className='custom-toggler'
            style={{ border: "none" }}
          />
          <Navbar.Brand as={Link} to={"/"}
          >
            <img
              alt=""
              src={imageURL + "logo.svg"}
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
                <img
                  alt=""
                  src={imageURL + "logo.svg"}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                Komponentti
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link as={Link} to={"/"}>Etusivu</Nav.Link>
                <NavDropdown
                  title="Tuotteet"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item as={Link} to={"/categories/gpu"}>
                    Näytönohjaimet
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/categories/cpu"}>
                    Prosessorit
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/categories/motherboard"}>
                    Emolevyt
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/categories/case"}>
                    Kotelot
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/categories/psu"}>
                    Virtalähteet
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/categories/ram"}>
                    Muistit
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/categories/hdd-ssd"}>
                    Kiintolevyt ja SSD:t
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand href="/cart"
            as={Link} to={"/cart"} style={{ marginLeft: "auto" }}
            className='shopping-cart'
          >
            <img
              alt=""
              src={imageURL + "shoppingcart.svg"}
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