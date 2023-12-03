import React from 'react'
import { Container, Navbar, NavDropdown, Offcanvas, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const expand = "lg"
  return (
    <>
      <Navbar expand={expand} className="bg-body-tertiary">
        <Container fluid
        className='container'
          style={{ justifyContent: "start" }}
        >
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}
            data-bs-theme="dark"
            className='custom-toggler'
            style={{ border: "none" }}
          />
          <Link to={"/"}>
            <Navbar.Brand href="/"
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
          </Link>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img
                  alt=""
                  src="./logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                Komponentti
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Link to={"/"}><Nav.Link href="/">Etusivu</Nav.Link></Link>
                <NavDropdown
                  title="Tuotteet"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item>
                    <Link to={"/categories/gpu"}>Näytönohjaimet</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to={"/categories/cpu"}>Prosessorit</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to={"/categories/motherboard"}>Emolevyt</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to={"/categories/case"}>Kotelot</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to={"/categories/psu"}>Virtalähteet</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to={"/categories/ram"}>Muistit</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to={"/categories/hdd-ssd"}>Kiintolevyt ja SSD:t</Link>
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Link to={"/cart"} style={{marginLeft:"auto"}}>
            <Navbar.Brand href="/cart"
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
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation