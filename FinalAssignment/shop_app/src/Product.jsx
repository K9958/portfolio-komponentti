import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Product = ({product}) => {
  return (
    <Card className='product-card'>
    <Card.Img variant="top" src={product.src ?? "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"} className='product-image'/>
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        {product.description} <br></br>
         Price: {product.price}
      </Card.Text>
      <Button
        className='product-button'
        variant="primary"
      >Lisää koriin</Button>
    </Card.Body>
  </Card>
  )
}

export default Product