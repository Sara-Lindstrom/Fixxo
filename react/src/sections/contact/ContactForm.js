import React from 'react'
import { useState } from 'react'

const ContactForm = () => {
    // useStates for validation
    const [contactForm, setContactForm] = useState ({name: '', email: '', comment: ''})
    const [canSubmit, setCanSubmit] = useState (false)  

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [commentError, setCommentError] = useState('');
    
    // validate name and set errors
    const ValidateName = () => {
        let error = '';
        const regExName = /^[a-zA-ZäöåÄÖÅ]+$/;

        if (contactForm.name === ''){
            error = "You need to enter a name"
        }
        else if (contactForm.name.length < 2){
            error ="your name must be at least two characters long"
        }
        else if (!regExName.test(contactForm.name)){
            error = "your name can only contain letters"
        }

        setNameError(error);

        return error === '' ? true : false;
    }

    // validate email and set errors
    const ValidateEmail = () => {
        let error = '';
        const regExEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        if (contactForm.email === ''){
            error = "You need to enter an email adress"
        }
        else if (!regExEmail.test(contactForm.email)) {
            error = "You need to enter a valid email (eg. exempel@domain.com)"
        }

        setEmailError(error);
        return error === '' ? true : false;
    }


    // validate comment and set errors
    const ValidateComment = () => {
        let error = '';

        if (contactForm.comment === ''){
            error = "You need to enter a comment"
        }
        else if (contactForm.comment.length < 5){
            error = "Your comment need to be at least five characters long"
        }

        setCommentError(error);
        return error === '' ? true : false;
    }
    
    // handle change for writing out inputs
    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm ({...contactForm, [id]: value})
    }  
    
    // validate if input is error free
    const ValidateOnSubmit = () => {
        let validName = ValidateName();
        let validEmail = ValidateEmail();
        let validComment =  ValidateComment();

        if(validName === true && validEmail === true && validComment === true)
            return true;
        else{
            return false;
        }
    };
    
    // validates if submit is valid
    const handleSubmit = (e) => {
        e.preventDefault()
        setCanSubmit(ValidateOnSubmit());
    }


  return (
    <section className="container">
        {
            // if for message when correct submittion
            canSubmit?
            (
                <div className="submitted-comment"><h2>Thank You For Your Comment!</h2></div>
            )
            :
            (
                // form
                <>
                    <h2 className="come-in-contact-title">Come In Contact With Us</h2>
                    <form onSubmit={handleSubmit} noValidate className="contact-form">
                        <div className='name'>
                            <input className={`${nameError === "" ? "" : "error"}`} id="name" type="text" placeholder='Your Name' value={contactForm.name} onKeyUp={ValidateName} onChange={handleChange}/>
                            <div className="error-message">{nameError}</div>
                        </div>
                        <div className='email'>
                            <input className={`${emailError === "" ? "" : "error"}`} id="email" type="email" placeholder='Your Mail' value={contactForm.email} onKeyUp={ValidateEmail} onChange={handleChange}/>
                            <div className="error-message">{emailError}</div>
                        </div>
                        <div className="comment">
                            <textarea className={`${commentError === "" ? "" : "error"}`} id="comment" placeholder='comment' value={contactForm.comment} onKeyUp={ValidateComment} onChange={handleChange}></textarea>
                            <div className="error-message">{commentError}</div>
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