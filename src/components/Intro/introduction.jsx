import React from 'react'
import './introduction.css'
import ContactLinks from '../ContactLinks/contactLinks'
import HeadShot from '../../assets/image-1.jpg'
import Technologies from '../technologies/technologies'


const Introduction = () => {
    return (
        <section className='introduction container' id="intro">
            <div className='introduction-div'>
                <div className='intro-text'>
                    <h1>Full Stack Developer</h1>
                    <h3>Hello I'm Jason Asante-Twumasi and welcome to my page</h3>
                    <h5 className='text-light'>Languages:</h5>
                    <Technologies />
                    <ContactLinks />
                </div>
                <div className='head-shot-container'>
                    <img className='intro-img' alt="Jason Asante's Head Shot" src={HeadShot} loading='lazy' />
                </div>
            </div>
        </section>
    )
}

export default Introduction;