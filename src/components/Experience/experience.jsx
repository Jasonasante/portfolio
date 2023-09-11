import React from 'react'
import './experience.css'
import { LuVerified } from 'react-icons/lu'

const Experience = () => {
    return (
        <section id="experience">
            <h5>Get To Know</h5>
            <h2>My Experience</h2>
            <div className="container experience-container">
                <div className="front-end-experience">
                    <h3>Front-End Development</h3>
                    <div className="experience-content">
                        <article className='experience-card'>
                            <LuVerified className="experience-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-card'>
                            <LuVerified className="experience-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intemediate</small>
                            </div>
                        </article>
                        <article className='experience-card'>
                            <LuVerified className="experience-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Intemediate</small>
                            </div>
                        </article>
                        <article className='experience-card'>
                            <LuVerified className="experience-icon" />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Intemediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="back-end-experience">
                    <h3>Back-End Development</h3>
                    <div className="experience-content">
                        <article className='experience-card'>
                            <LuVerified className="experience-icon" />
                            <div>
                                <h4>Go</h4>
                                <small className='text-light'>Intemediate</small>
                            </div>
                        </article>
                        <article className='experience-card'>
                            <LuVerified className="experience-icon" />
                            <div>
                                <h4>SQLite3</h4>
                                <small className='text-light'>Intemediate</small>
                            </div>
                        </article>
                        <article className='experience-card'>
                            <LuVerified className="experience-icon" />
                            <div>
                                <h4>GraphQL</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>

                    </div>
                </div>
                <div className="other-experience">
                    <h3>Other</h3>
                    <div className="experience-content">
                        <article className='experience-card'>
                            <LuVerified className="experience-icon" />
                            <div>
                                <h4>Photoshop</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-card'>
                            <LuVerified className="experience-icon" />
                            <div>
                                <h4>Linux</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience-card'>
                            <LuVerified className="experience-icon" />
                            <div>
                                <h4>Git</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience-card'>
                            <LuVerified className="experience-icon" />
                            <div>
                                <h4>RESTful API</h4>
                                <small className='text-light'>Intemediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience