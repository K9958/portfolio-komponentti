import React, { useState, useEffect, useRef } from 'react'
import { Container, Navbar, NavDropdown, Offcanvas, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const imageURL = "/komponentti/"

const Navigation = () => {
  const [expanded, setExpanded] = React.useState(false)
  const [showHint, setShowHint] = useState(false);
  const cartItems = useSelector(state => state.cart)

  const prevCartItemsCountRef = useRef();

  useEffect(() => {
    const currentCartItemsCount = Object.values(cartItems).reduce((a, b) => a + b, 0);
    const prevCartItemsCount = prevCartItemsCountRef.current;

    if (prevCartItemsCount !== undefined) { // Skip the check on initial render
      if (currentCartItemsCount > prevCartItemsCount) {
        console.log('Item added to cart');
        // Show hint box for item added
        setShowHint(true);
        setTimeout(() => {
          setShowHint(false);
        }, 3000);
      } else if (currentCartItemsCount < prevCartItemsCount) {
        console.log('Item removed from cart');
        // Handle item removed case
      }
    }

    // Update the previous count for the next render
    prevCartItemsCountRef.current = currentCartItemsCount;
  }, [cartItems]);

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
          <Navbar.Brand as={Link} to={"/"} className='shadow-animation'
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
            className={`shopping-cart position-relative ${showHint ? 'show-hint' : ''}`}
          >
            <div className='shopping-cart-svg-container'>
              <svg aria-hidden="true" data-prefix="fal" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-shopping-bag fa-w-14 fa-7x"><path fill="white" d="M352 128C352 57.421 294.579 0 224 0 153.42 0 96 57.421 96 128H0v304c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V128h-96zM224 32c52.935 0 96 43.065 96 96H128c0-52.935 43.065-96 96-96zm192 400c0 26.467-21.533 48-48 48H80c-26.467 0-48-21.533-48-48V160h64v48c0 8.837 7.164 16 16 16s16-7.163 16-16v-48h192v48c0 8.837 7.163 16 16 16s16-7.163 16-16v-48h64v272z" class=""></path></svg>
            </div>
            <div className="hint-box">Tuote lisätty ostoskoriin</div>
            <Navbar.Text className={Object.keys(cartItems).length > 0 ? 'shopping-cart-count' : 'shopping-cart-count visually-hidden'}>
              {Object.values(cartItems).reduce((a, b) => a + b, 0)}
            </Navbar.Text>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation