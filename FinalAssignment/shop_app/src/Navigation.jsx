import React from 'react'
import { Container, Navbar, NavDropdown, Offcanvas, Nav, NavbarToggle } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const imageURL = "/komponentti/"

const Navigation = () => {
  const [expanded, setExpanded] = React.useState(false)
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
            onClick={() => setExpanded(expanded ? false : "lg")}
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
            show={expanded}
            onHide={() => setExpanded(false)}
          >
            <Offcanvas.Header closeButton onClick={() => setExpanded(false)}>
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
                <Nav.Link as={Link} to={"/"}
                  onClick={() => setExpanded(false)}
                >Etusivu</Nav.Link>
                <NavDropdown
                  title="Tuotteet"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item as={Link} to={"/categories/gpu"} className='nav-dropdown-link' onClick={() => setExpanded(false)}>
                    Näytönohjaimet
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/categories/cpu"} className='nav-dropdown-link' onClick={() => setExpanded(false)}>
                    Prosessorit
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/categories/motherboard"} className='nav-dropdown-link' onClick={() => setExpanded(false)}>
                    Emolevyt
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/categories/case"} className='nav-dropdown-link' onClick={() => setExpanded(false)}>
                    Kotelot
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/categories/psu"} className='nav-dropdown-link' onClick={() => setExpanded(false)}>
                    Virtalähteet
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/categories/ram"} className='nav-dropdown-link' onClick={() => setExpanded(false)}>
                    Muistit
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/categories/hdd-ssd"} className='nav-dropdown-link' onClick={() => setExpanded(false)}>
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