import React from 'react'
import { useState } from 'react'

const ContactForm = () => {

    const [contactForm, setContactForm] = useState ({name: '', email: '', comment: ''})
    const [formErrors, setFormErrors] = useState ({})
    const [canSubmit, setCanSubmit] = useState (false)  

    const validateElement = (value) => {
        const errors = {}
        const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const regExName = /^[a-zA-ZäöåÄÖÅ]+$/

        if (!value.name){
            errors.name = "You need to enter a name"
        }
        else if (value.name.length < 2){
            errors.name="your name must be at least two characters long"
        }
        else if (!regExName.test(value.name)){
            errors.name = "your name can only contain letters"
        }

        if (!value.email){
            errors.email = "You need to enter an email adress"
        }
        else if (!regExEmail.test(value.email)) {
            errors.email= "You need to enter a valid email (eg. exempel@domain.com)"
        }

        if (!value.comment){
            errors.comment = "You need to enter a comment"
        }
        else if (value.comment.length < 5){
            errors.comment= "Your comment need to be at least five characters long"
        }

        if (Object.keys(errors).length === 0){
            setCanSubmit(true)
        }
        else{
            setCanSubmit(false)
        }

        return errors;
    }   
    
    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm ({...contactForm, [id]: value})
    }  
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validateElement(contactForm))
    }


  return (
    <section className="container">
        {
            canSubmit?
            (
                <div className="submitted-comment"><h2>Thank You For Your Comment!</h2></div>
            )
            :
            (
                <>
                    <h2 className="come-in-contact-title">Come In Contact With Us</h2>
                    <form onSubmit={handleSubmit} noValidate className="contact-form">
                        <div className='name'>
                            <input className="error" id="name" type="text" placeholder='Your Name' value={contactForm.name} onChange={handleChange}/>
                            <div className="error-message">{formErrors.name}</div>
                        </div>
                        <div className='email'>
                            <input className="error" id="email" type="email" placeholder='Your Mail' value={contactForm.email} onChange={handleChange}/>
                            <div className="error-message">{formErrors.email}</div>
                        </div>
                        <div className="comment">
                            <textarea className="error" id="comment" placeholder='comment' value={contactForm.comment} onChange={handleChange}></textarea>
                            <div className="error-message">{formErrors.comment}</div>
                        </div>
                        <div className='submit'>
                            <button type="submit" className="button theme-button">Post Comment</button>
                        </div>
                    </form>
                </>
            )
        }

    </section>
  )
}

export default ContactForm