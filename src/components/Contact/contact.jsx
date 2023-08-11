import React, { useRef } from 'react'
import './contact.css'
import { AiOutlineMail, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_rkos3sp', 'template_pdh7r0h', form.current, '3sqljFGuy8f6Y3UV2')
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact-container">
                <div className="contact-options">
                    <article className="contact-option">
                        <AiOutlineMail className="contact-icon" />
                        <p>Email</p>
                        <a href='mailto:jason.asante@outlook.com' className="text-light">jason.asante@outlook.com</a>
                    </article>
                    <article className="contact-option">
                        <AiFillLinkedin className="contact-icon" />
                        <p>LinkedIn</p>
                        <a href="https://www.linkedin.com/in/jason-asante/" className="text-light">Click Here</a>
                    </article>
                    <article className="contact-option">
                        <AiOutlineWhatsApp className="contact-icon" />
                        <p>Phone</p>
                        <a href='https://api.whatsapp.com/send?phone=+447802512920' className="text-light">07802512920</a>
                    </article>
                </div>
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Full Name' required />
                    <input type="email" name="email" placeholder='youremail@example.com' required />
                    <input type="text" name="subject" placeholder='Subject' required />
                    <textarea name="message" cols="30" rows="10" placeholder='Your Message' required></textarea>
                    <div className="send-message">
                        <button type="submit" className='btn'>Send Message</button>
                    </div>
                </form >
            </div>
        </section>
    )
}

export default Contact