import React from 'react';
import { Carousel } from 'react-bootstrap';

const BannerImage = (props) => {
    return (
        <img
            className="d-block w-100 banner-image"
            src={props.src ?? "https://images.pexels.com/photos/8622911/pexels-photo-8622911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt={props.text}
        />
    )
}

export const RotatingBanner = () => {
    return (
      <Carousel
      className='container p-0'
      >
      <Carousel.Item>
        <BannerImage text="First slide" src="https://images.pexels.com/photos/5625008/pexels-photo-5625008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Carousel.Caption>
          <h3>Black Friday-tarjoukset juuri nyt!</h3>
          <p>Tuotteita useista kategorioista pimennyshinnoin!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <BannerImage text="Second slide" src="https://images.pexels.com/photos/9072388/pexels-photo-9072388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Carousel.Caption>
          <h3>Katso Esports-mallistomme</h3>
          <p>Parhaan suorituskyvyn komponentit vain meiltä!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <BannerImage text="Third slide" />
        <Carousel.Caption>
          <h3>Väännä suorituskyvyt kaakkoon!</h3>
          <p>
            Hae uusimmat RTX-näytönohjaimet nyt meiltä!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}