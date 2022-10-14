import React from 'react'
import showcaseLeft from '../assets/img/showcase-left.svg'
import showcaseRight from '../assets/img/showcase-right.svg'
import ThemeButton from '../components/ThemeButton'

const Showcase = () => {
  return (
    <div className="showcase">
        <img src={showcaseLeft} alt="showcase"/>
        <div className="group"> 
            <h2>SALE UP<br/>To 50% off</h2>
            <p>online shopping free home delivery over $100</p>
            <ThemeButton buttonText="SHOP NOW"></ThemeButton>
        </div>
        <img src={showcaseRight} alt="showcase"/>
    </div>
  )
}

export default Showcase;