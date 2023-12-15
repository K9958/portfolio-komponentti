import { Card, Button, InputGroup, Form } from 'react-bootstrap';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, removeFromCart, removeFromCartSingle, clearCart } from "../storeSlice";


const { productdata } = require('../productdata.json');

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart);

  // console.log("items",cartItems)
  // console.log(productdata)

  function calculateTotal() {
    let total = 0;
    Object.keys(cartItems).forEach(itemId => {
      const item = productdata.find(product => product.id === parseInt(itemId));
      const count = cartItems[itemId];
      total += item.price * count;
    });
    return total;
  }


  function calculateVat() {
    let vat = 0;
    Object.keys(cartItems).forEach(itemId => {
      const item = productdata.find(product => product.id === parseInt(itemId));
      const count = cartItems[itemId];
      vat += item.price * count * 0.24;
    });
    return vat;
  }

  function calculateWithoutVat() {
    let withoutVat = 0;
    Object.keys(cartItems).forEach(itemId => {
      const item = productdata.find(product => product.id === parseInt(itemId));
      const count = cartItems[itemId];
      withoutVat += item.price * count * 0.76;
    });
    return withoutVat;
  }

  const handleClearCart = () => {
    console.log('clearing cart')
    // from redux store use slice action to clear cart
    dispatch(clearCart())
  }

  function formatEuros(price) {
    return new Intl.NumberFormat("fi-FI", { minimumFractionDigits: 2 }).format(price) + ' €';
  }

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleRemoveSingleItem = (id) => {
    dispatch(removeFromCartSingle(id))
  }

  const handleAddToCart = (payload) => {
    dispatch(addToCart(payload))
  }

  useEffect(() => {
    //console.log("cartItems", cartItems)
  }, [cartItems])

  return (
    <div className="cart-container container">
      <h1 className='first-header'>Ostoskorin sisältö</h1>
      <div className='page-split'>
        <div className="cart">
          {Object.keys(cartItems).length === 0 &&
            <Card className='cart-empty'>
              <Card.Body>
                <Card.Title className='cart-title'>Täällä on aika tyhjää..</Card.Title>
                <Card.Text className='cart-row'>
                  <Link to='/'>Palaa selaamaan tuotteita tästä</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          }
          {Object.keys(cartItems).map((itemId) => {
            //console.log(itemId)
            const item = productdata.find(product => product.id === parseInt(itemId));
            //console.log(item)
            const count = cartItems[itemId];

            return (
              <Card key={itemId} className="cart-item">
                <Card.Img variant="top" src={item.src ?? "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"} className='product-image' />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.description_fi}
                  </Card.Text>
                  <div className='end-of-card'>
                    <Card.Text className='product-price right'>
                      {item.price * count},- € <br></br>
                      {count > 1 && <span className='per-price'>à {item.price} €</span>}
                    </Card.Text>
                    <div>
                      <InputGroup className='cartitem-count-controls'>
                        <Button className='control' onClick={() => handleRemoveSingleItem(itemId)}>-</Button>
                        <Form.Control className='control-amount' value={count} disabled />
                        <Button className="control" onClick={() => handleAddToCart({ id: item.id, count: count + 1 })}>+</Button>
                      </InputGroup>
                    </div>
                    <Button
                      className='product-button remove-button'
                      variant="primary"
                      onClick={() => handleRemoveItem(itemId)}
                    >Poista tuote
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
        <Card className='cart-overview'>
          <div>
            <Card.Body>
              <Card.Title className='cart-title'>Yhteenveto</Card.Title>
              <Card.Text className='cart-row'>
                <span className='first-item'>Tuotteita:</span><span className='second-item'>{Object.keys(cartItems).length} kpl</span>
              </Card.Text>
              <Card.Text className='cart-row'>
                <span className='first-item'>Yhteensä (ALV 0%):</span><span className='second-item'>{formatEuros(calculateWithoutVat())}</span>
              </Card.Text>
              <Card.Text className='cart-row'>
                <span className='first-item'>ALV (24%):</span><span className='second-item'>{formatEuros(calculateVat())}</span>
              </Card.Text>
              <hr></hr>
              <Card.Text className='cart-row'>
                <span className='first-item'>Yhteensä:</span><span className='second-item total-price'>{formatEuros(calculateTotal())}</span>
              </Card.Text>
              <Button
                className='cart-order-button'
                disabled={Object.keys(cartItems).length === 0}
                variant="primary"
                onClick={() => {
                  // TODO: navigate to order page
                  // show alert
                  alert('Tilaus onnistui! Kiitos tilauksesta!')
                }}
              >Siirry tilaamaan
              </Button>
              <Button
                className='clear-cart-button'
                variant="clear"
                onClick={handleClearCart}
              >Tyhjennä ostoskori
              </Button>
            </Card.Body>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Cart