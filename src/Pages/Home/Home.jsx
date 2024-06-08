import React from 'react'
import Products from '../../Component/Products/Products'
import Slider from '../../Component/Slider/Slider'
import Products_Slider from '../../Component/Products_Slider/Products_Slider'

const Home = () => {
  return (
    <div>
      <Slider />
      <Products />
      {/* <Products_Slider /> */}
    </div>
  )
}

export default Home