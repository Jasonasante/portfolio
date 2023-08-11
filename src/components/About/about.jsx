import React from 'react'
import './about.css'
import AboutMe from '../../assets/aboutme.gif'
import { GiDiploma, GiNetworkBars } from 'react-icons/gi'
import { FaAward } from 'react-icons/fa'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about-container'>
                <div className='about-me'>
                    <div className="about-me-image">
                        <img src={AboutMe} alt="about me" loading='lazy' />
                    </div>

                </div>
                <div className='about-content'>
                    <div className="about-me-cards">
                        <article className='about-me-card'>
                            <FaAward className='about-icon' />
                            <h5>Experience</h5>
                            <small> 18+ months</small>
                        </article>
                        <article className='about-me-card'>
                            <GiDiploma className='about-icon' />
                            <h5>University of Warwick</h5>
                            <small> Upper Second Division (2:1)</small><br></br>
                            <small> Bsc Biomedical Science</small>
                        </article>
                        <article className='about-me-card'>
                            <GiNetworkBars className='about-icon' />
                            <h5>Projects</h5>
                            <small> 15+ Completed</small>
                        </article>
                    </div>
                    <p>Self-motivated Junior Full-Stack Software Developer with 18+ months of experience programming in Go, JavaScript and about to embark on Rust. Continuously seeking opportunities to gain experience and grow as a software developer. Imbued with time-management, prioritisation and critical thinking skills gained as a Biomedical Science Student and fellow at 01Founders. </p>
                </div>
            </div>
            <div className='learn-more'>
                <a href="#/bio" className='btn-primary'>Learn more...</a>
            </div>
        </section>
    )
}

export default About