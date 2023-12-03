import { Card, Button } from 'react-bootstrap';


const { productdata } = require('../productdata.json');

const Cart = () => {

  // dummy cart items
  const cartItems = productdata

  return (
    <div className="cart-container container">
      <h1 className='first-header'>Ostoskorin sisältö</h1>
      <div className="cart">
        {cartItems.length === 0 && <div>Ostoskorisi on tyhjä..</div>}
        {cartItems.map((item) => (
          <Card key={item.id} className="cart-item">
            <Card.Img variant="top" src={item.src ?? "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"} className='product-image' />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.description} <br></br>
                Price: {item.price}
              </Card.Text>
              <Button
                className='product-button'
                variant="primary"
              >Poista tuote</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Cart