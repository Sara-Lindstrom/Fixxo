import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { currencyFormatter } from '../../../assets/utilities/currencyFormatter'
import RoundButtonicon from '../../../components/RoundButtonIcon'

const ProductDetails = ({item}) => {

  const [countAmount, setCountAmount] = useState(0)
  

  // https://stackoverflow.com/questions/47287177/how-to-loop-over-a-number-in-react-inside-jsx
  const rating = (starRating) => {
    let stars = []
    for (let i = 0; i<starRating; i++){
     stars.push(<i className="fa-solid fa-star"></i>)
    }
    if (stars.length<5){
      for (let i = stars.length; i<5; i++){
        stars.push(<i className="fa-regular fa-star"></i>)
      }
    }
    return stars
  }

  return (
    <>
      <div className='container d-flex'>
        <div className='img-grid'>
          <div className='big-image-box'>
            <img className='product-detail-img' src={item.imageName} alt={item.name}/>  
          </div>
          <div className='small-image-box'>
            <img className='product-detail-img' src={item.imageName} alt={item.name}/>   
            <img className='product-detail-img' src={item.imageName} alt={item.name}/>     
            <img className='product-detail-img' src={item.imageName} alt={item.name}/>            
          </div>
        </div>
        <div className='info-box'>
          <h2 className='title'>{item.name}</h2>
          <span>{rating(item.rating)}</span>
          <p>{currencyFormatter(item.price)}</p>
          <p>Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly.Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly.</p>

          <form noValidate>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
              <p>Size:</p>
              <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"/>
              <label className="btn btn-outline-primary" htmlFor="btnradio1">S</label>

              <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
              <label className="btn btn-outline-primary" htmlFor="btnradio2">M</label>

              <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
              <label className="btn btn-outline-primary" htmlFor="btnradio3">L</label>

              <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off"/>
              <label className="btn btn-outline-primary" htmlFor="btnradio4">X</label>
            </div>   

            <div className='color-option'>
              <p>Color:</p>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown button
                </button>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" href="#">Action</NavLink></li>
                  <li><NavLink className="dropdown-item" href="#">Another action</NavLink></li>
                  <li><NavLink className="dropdown-item" href="#">Something else here</NavLink></li>
                </ul>
              </div>
            </div>
            <div className='quantity-option'>
              <button type='button' onClick={()=>setCountAmount(countAmount +1)}>+</button>
              <p>{countAmount}</p>
              <button  type='button' onClick={()=> countAmount>0 ? setCountAmount(countAmount -1) : {}}>-</button>
            </div>  
            <button type='submit' className='theme-button button'>ADD TO CART</button>
          </form>

          <div className='share-options'>
            <p>Share:</p>
            <RoundButtonicon icon={"fa-brands fa-facebook-f"}></RoundButtonicon>
            <RoundButtonicon icon={"fa-brands fa-instagram"}></RoundButtonicon>
            <RoundButtonicon icon={"fa-brands fa-twitter"}></RoundButtonicon>
            <RoundButtonicon icon={"fa-brands fa-google"}></RoundButtonicon>
            <RoundButtonicon icon={"fa-brands fa-linkedin"}></RoundButtonicon>
          </div>
        </div>
      </div>
      <div className='container'>

      </div>
    </>
  )
}

export default ProductDetails