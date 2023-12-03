import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const { categories } = require('./productdata.json')

const Product = ({ product, showLong }) => {

  const linkText = `/product/${product.id}`
  return (
    <Card className='product-card'>
      <Link to={linkText}><Card.Img variant="top" src={product.src ?? "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"} className='product-image' /></Link>
      <Card.Body>
        <div>
          <Link to={linkText}><Card.Title>{product.name}</Card.Title></Link>
          <Card.Text className='card-text'>
            {product.description_fi} <br></br>
          </Card.Text>
          {showLong && <div>
            <Card.Text className='card-text'>
              Tuotenumero: {product.id}
            </Card.Text>
            <Card.Text className='card-text'>
              Tuoteryhmä: {categories.find((cat) => cat.id === product.category).name_fi}
            </Card.Text>
          </div>
          }
        </div>
        <div className='card-end'>
          <Card.Text
            className='product-price'>
            {product.price},-
          </Card.Text>
          <Button
            className='product-button'
            variant="primary"
          ><img
              style={{ marginRight: "5px" }}
              alt=""
              src="./shoppingcart.svg"
              width="23"
              height="20"
              className="d-inline-block align-top"
            />Lisää koriin</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Product