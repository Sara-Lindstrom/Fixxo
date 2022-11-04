import Footer from '../../components/Footer';
import ProductGrid from '../../components/ProductGrid';
import Navigationbar from '../../components/Navigationbar'; 
import Showcase from '../Home/sections/Showcase';
import FeaturedShowcase from '../Home/sections/FeaturedShowcase';
import ShoppingInfo from '../Home/sections/ShoppingInfo';
import ShowCaseGrid from '../Home/sections/ShowCaseGrid';
import ShowCaseGridPlaceholder from '../../assets/img/flash-sale-show-case.svg'
import SaleShowcase from '../Home/sections/SaleShowcase';
import CompanyInformation from '../Home/sections/CompanyInformation';
import CustomerService from "../../assets/img/customer-service-icon.svg";
import CustomerSecurePayment from "../../assets/img/secured-payment-icon.svg";
import CustomerDelivery from "../../assets/img/delivery-truck-icon.svg";
import { UseGetFeaturedProducts } from '../../Hooks/UseGetFeaturedProducts';

const Home = () => {

  return (
    <>
      <Navigationbar />
      <Showcase />
      <ProductGrid title={"Featured Products"} col={"4"} items={UseGetFeaturedProducts(8)}/>
      <FeaturedShowcase/>
      <ShoppingInfo/>
      <ShowCaseGrid leftImg={ShowCaseGridPlaceholder} leftAlt={"place holder"} col={2} rightImg={""} rightAlt={""} item={UseGetFeaturedProducts(4)}/>
      <ShowCaseGrid leftImg={""} leftAlt={""}  col={2} rightImg={ShowCaseGridPlaceholder} rightAlt={"place holder"} item={UseGetFeaturedProducts(4)}/>
      <SaleShowcase/>
      <div className="container flex">
        <ProductGrid cardIsFlexed={true} title={"Latest Products"} col={"1"}items={UseGetFeaturedProducts(3)}/>
        <ProductGrid cardIsFlexed={true} title={"Best Selling Products"} col={"1"}items={UseGetFeaturedProducts(3)}/>
        <ProductGrid cardIsFlexed={true} title={"Top Reacted Products"} col={"1"}items={UseGetFeaturedProducts(3)}/>
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