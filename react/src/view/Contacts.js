import React from 'react'
import BreadCrumb from '../sections/BreadCrumb';
import Footer from '../sections/Footer';
import Navigationbar from './../sections/Navigationbar'; 
import Map from './../sections/contact/Map';
import ContactForm from '../sections/contact/ContactForm';

const Contacts = () => {
  return (
    <div className='footer-wrapper'>
      <div className='wrapper'>
        <Navigationbar/>
        <BreadCrumb currentPage="Contacts"/>
        <Map/>
        <ContactForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default Contacts