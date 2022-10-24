import React from 'react'

const ContactForm = () => {
  return (
    <section className="container">
        <h2>Come In Contact With Us</h2>
        <form noValidate className="contact-form">
            <div>
                <input id="name" type="text" placeholder='Your Name'/>
                <div className="error-message"></div>
            </div>
            <div>
                <input id="email" type="email" placeholder='Your Mail'/>
                <div className="error-message"></div>
            </div>
            <div classNAme="textarea">
                <textarea id="comment" placeholder='comment'></textarea>
                <div className="error-message"></div>
            </div>
            <div>
                <button type="submit" className="button theme-button">Post Comment</button>
            </div>
        </form>
    </section>
  )
}

export default ContactForm