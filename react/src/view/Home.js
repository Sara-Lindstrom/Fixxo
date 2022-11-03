import React, { useContext } from 'react'
import Footer from '../sections/Footer';
import ProductGrid from '../sections/home/ProductGrid';
import Navigationbar from './../sections/Navigationbar'; 
import Showcase from '../sections/home/Showcase';
import FeaturedShowcase from '../sections/home/FeaturedShowcase';
import ShoppingInfo from '../sections/home/ShoppingInfo';
import ShowCaseGrid from '../sections/home/ShowCaseGrid';
import ShowCaseGridPlaceholder from './../assets/img/flash-sale-show-case.svg'
import SaleShowcase from '../sections/home/SaleShowcase';
import CompanyInformation from '../sections/home/CompanyInformation';
import CustomerService from "./../assets/img/customer-service-icon.svg";
import CustomerSecurePayment from "./../assets/img/secured-payment-icon.svg";
import CustomerDelivery from "./../assets/img/delivery-truck-icon.svg";
import { ProductContext } from '../assets/Context/Context';

const Home = () => {

  const productContext = useContext(ProductContext)

  return (
    <>
      <Navigationbar />
      
      <Showcase />
      <ProductGrid title={"Featured Products"} col={"4"} items={productContext.featured}/>
      <FeaturedShowcase/>
      <ShoppingInfo/>
      <ShowCaseGrid leftImg={ShowCaseGridPlaceholder} leftAlt={"place holder"} col={2} rightImg={""} rightAlt={""} items={productContext.showcase}/>
      <ShowCaseGrid leftImg={""} leftAlt={""}  col={2} rightImg={ShowCaseGridPlaceholder} rightAlt={"place holder"} items={productContext.showcase}/>
      <SaleShowcase/>
      <div className="container flex">
        <ProductGrid cardIsFlexed={true} title={"Latest Products"} col={"1"} items={productContext.latest}/>
        <ProductGrid cardIsFlexed={true} title={"Best Selling Products"} col={"1"} items={productContext.bestSelling}/>
        <ProductGrid cardIsFlexed={true} title={"Top Reacted Products"} col={"1"} items={productContext.topReacted}/>
      </div>    
      <hr className="container line-break"/> 
      <div className="container contact-info">
          <CompanyInformation companyimg={CustomerService} companytitle={"Customer Support"} companyinfo={"Lorem ipsum dolor sit amet consectetur."}/>
          <CompanyInformation companyimg={CustomerSecurePayment} companytitle={"Secured Payment"} companyinfo={"Lorem ipsum dolor sit amet consectetur."}/>
          <CompanyInformation companyimg={CustomerDelivery} companytitle={"Free Home Delivery"} companyinfo={"Lorem ipsum dolor sit amet consectetur."}/>
          <CompanyInformation companyimg={CustomerDelivery} companytitle={"30 Day Free Return"} companyinfo={"Lorem ipsum dolor sit amet consectetur."}/>
      </div>   
      <Footer shortSite={false}/>
    </>
  )
}

export default Home