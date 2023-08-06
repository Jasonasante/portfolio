import React from 'react';
import './contactLinks.css';
import CV from '../../assets/cv.pdf'

const ContactLinks = () => {
    return (
        <div className="actions">
            <a href={CV} className='btn' download>Download CV</a>
            <a href="#/contact" className='btn'>Contact Me</a>
            <a href="https://www.linkedin.com/in/jason-asante/" className='btn'>LinkedIn</a>
            <a href="https://github.com/Jasonasante" className='btn'>GitHub</a>
        </div>
    )
}

export default ContactLinks;