import React from 'react'
import './Home.css'
import TopBar from '../../components/TopBar/TopBar'
import Slider1 from '../../components/Slider/Slider1'
import Slider2 from '../../components/Slider/Slider2'
import ElectronicsDeals from '../../components/Deals/ElectronicsDeals'
import Products from '../../components/Products'
import Footer1 from '../../components/FooterBar/Footer1'
import Footer2 from '../../components/FooterBar/Footer2'
import Footer3 from '../../components/FooterBar/Footer3'


const Home = () => {
  return (
    <div>
    <TopBar/>
    <Slider1/>
    <Slider2/>
    <ElectronicsDeals/>
    <Products/>
    <Footer1/>
    <Footer2/>
    <Footer3/>
  
    </div>
  )
}

export default Home