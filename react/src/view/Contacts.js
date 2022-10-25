import React from 'react'
import BreadCrumb from '../sections/contact/BreadCrumb';
import Footer from '../sections/Footer';
import Navigationbar from './../sections/Navigationbar'; 
import Map from './../sections/contact/Map';
import ContactForm from '../sections/contact/ContactForm';

const Contacts = () => {
  return (
    <>
      <Navigationbar/>
      <BreadCrumb currentPage="Contacts"/>
      <Map/>
      <ContactForm/>
      <Footer shortSite={true}/>
    </>
  )
}

export default Contacts