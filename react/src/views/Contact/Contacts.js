import React from 'react'
import BreadCrumb from '../../components/BreadCrumb';
import Footer from '../../components/Footer';
import Navigationbar from '../../components/Navigationbar'; 
import Map from '../Contact/Sections/Map';
import ContactForm from '../Contact/Sections/ContactForm';

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