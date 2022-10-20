import React from 'react'
import { useState } from 'react';
import Footer from '../sections/Footer';
import ProductGrid from '../sections/ProductGrid';
import Navigationbar from './../sections/Navigationbar'; 
import Showcase from './../sections/Showcase';
import FeaturedShowcase from './../sections/FeaturedShowcase';
import ShoppingInfo from '../sections/ShoppingInfo';
import ShowCaseGrid from '../sections/ShowCaseGrid';
import ShowCaseGridPlaceholder from './../assets/img/flash-sale-show-case.svg'
import SaleShowcase from '../sections/SaleShowcase';
import CompanyInformation from '../sections/CompanyInformation';
import CustomerService from "./../assets/img/customer-service-icon.svg";
import CustomerSecurePayment from "./../assets/img/secured-payment-icon.svg";
import CustomerDelivery from "./../assets/img/delivery-truck-icon.svg";

const Home = () => {
//  USESTATE PRODUCTS
  const [featuredProducts, setFeaturedProducts] = useState([
      {id: 1, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
      {id: 2, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
      {id: 3, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
      {id: 4, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
      {id: 5, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
      {id: 6, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
      {id: 7, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
      {id: 8, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
  ])

  const [upperProducts, setUpperProducts] = useState([
    {id: 9, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
    {id: 10, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
    {id: 11, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
    {id: 12, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
  ])

  const [latestProducts, setlatestProducts] = useState([
    {id: 13, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
    {id: 14, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
    {id: 15, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
  ])

  const [bestSellingProducts, setBestSellingProducts] = useState([
    {id: 16, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
    {id: 17, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
    {id: 18, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
  ])

  const [topReactedProducts, setTopReactedProducts] = useState([
    {id: 19, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
    {id: 20, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
    {id: 21, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
  ])

  return (
    <>
      <Navigationbar />
      <Showcase />
      <ProductGrid title={"Featured Products"} products={featuredProducts} col={"4"}/>
      <FeaturedShowcase/>
      <ShoppingInfo/>
      <ShowCaseGrid leftImg={ShowCaseGridPlaceholder} leftAlt={"place holder"} products={upperProducts} col={2} rightImg={""} rightAlt={""} />
      <ShowCaseGrid leftImg={""} leftAlt={""} products={upperProducts} col={2} rightImg={ShowCaseGridPlaceholder} rightAlt={"place holder"} />
      <SaleShowcase/>
      <div className="container flex">
        <ProductGrid cardIsFlexed={true} title={"Latest Products"} products={latestProducts} col={"1"} />
        <ProductGrid cardIsFlexed={true} title={"Best Selling Products"} products={bestSellingProducts} col={"1"} />
        <ProductGrid cardIsFlexed={true} title={"Top Reacted Products"} products={topReactedProducts} col={"1"} />
      </div>    
      <hr className="container line-break"/> 
      <div className="container contact-info">
          <CompanyInformation companyimg={CustomerService} companytitle={"Customer Support"} companyinfo={"Lorem ipsum dolor sit amet consectetur."}/>
          <CompanyInformation companyimg={CustomerSecurePayment} companytitle={"Secured Payment"} companyinfo={"Lorem ipsum dolor sit amet consectetur."}/>
          <CompanyInformation companyimg={CustomerDelivery} companytitle={"Free Home Delivery"} companyinfo={"Lorem ipsum dolor sit amet consectetur."}/>
          <CompanyInformation companyimg={CustomerDelivery} companytitle={"30 Day Free Return"} companyinfo={"Lorem ipsum dolor sit amet consectetur."}/>
      </div>   
      <Footer/>
    </>
  )
}

export default Home