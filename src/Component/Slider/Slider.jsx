import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
  return (
  <div className='carousel' >
     <Carousel infiniteLoop interval={2000} autoPlay >
    <div className="poster">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/a859e5c525a11ef9.jpg?q=20" alt="" />
    </div>
    <div className="poster">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f241e768f8367561.jpg?q=20" alt="" />
    </div>
    <div className="poster">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/17a2c4ed00866b1a.jpg?q=20" alt="" />
    </div>
    <div className="poster">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/cc633426b89ad841.png?q=20" alt="" />
    </div>
   </Carousel>
  </div>
  )
}

export default Slider