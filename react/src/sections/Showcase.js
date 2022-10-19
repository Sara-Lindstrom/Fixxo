import React from 'react'
import showcaseLeft from '../assets/img/showcase-left.svg'
import showcaseRight from '../assets/img/showcase-right.svg'
import ThemeButton from '../components/ThemeButton'
import underLefttImg from '../assets/img/winter-clearans-placeholder.svg'
import underRightImg from '../assets/img/new-arrivals-placeholder.svg'

const Showcase = () => {
  return (
    <>
      <div className="showcase">
          <img src={showcaseLeft} alt="showcase"/>
          <div className="group"> 
              <h2>SALE UP<br/>To 50% off</h2>
              <p>online shopping free home delivery over $100</p>
              <ThemeButton buttonText="SHOP NOW"></ThemeButton>
          </div>
          <img src={showcaseRight} alt="showcase"/>
      </div>

      {/* winter clearance and new arrivals */}
      <div class="clearance-arrivals container-fluid">
          {/* <!-- clearence --> */}
          <div class="clearance background"> 
              <div class="info">
                  <h2>Winter&nbsp;Clearance <br/> Up to 70% off!</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia quod necessitatibus maiores aspernatur aperiam optio repellendus, quas nesciunt illo repellat sunt aliquam autem, consectetur minus quos nobis velit. Exercitationem.</p>
                  <button class="button dark-button">SHOP&nbsp;NOW</button>       
              </div>
              <img src={underLefttImg} alt="winter clearance"/>
          </div>
          {/* <!-- new arrivals --> */}
          <div class="arrivals background">  
              <div class="info">
                  <h2>New<br/>Arivals</h2>
                  <button class="button dark-button">SHOP&nbsp;NOW</button>                         
              </div>  
              <img src={underRightImg} alt="new arrivals"/>
          </div>
      </div>
    </>
    
  )
}

export default Showcase;