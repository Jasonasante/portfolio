import React from 'react'
import './recent-projects.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import MakeYourGame from '../../assets/make-your-game.jpg'
import SocialNetwork from '../../assets/social-network.png'
import RealTimeForum from '../../assets/real-time-forum.png'
import Bomberman from '../../assets/bomberman-dom.png'

const RecentProjects = () => {
    return (
        <section id="recent-projects">
            <h5>Get To Know</h5>
            <h2>My Recent Projects</h2>
            <div className="container recent-projects-container">
                <div className="recent-projects-cards">
                    <article className='recent-project-card'>
                        <div className='recent-project-image'>
                            <img src={Bomberman} alt="Bomberman" />
                        </div>
                        <div className="recent-project-content">
                            <h4>Bomberman</h4>
                            <p> A multi-player last-man standing video game where users can interact via messaging</p>
                            <small className='text-light'>JavaScript, custom mini-framework</small>
                        </div>
                        <div className="recent-project-links">
                            <a href="https://github.com/RJNA-Rangers/bomberman-dom" className='btn-primary'> GitHub</a>
                        </div>
                    </article>
                    <article className='recent-project-card'>
                        <div className='recent-project-image'>
                            <img src={SocialNetwork} alt="Social Network" />
                        </div>
                        <div className="recent-project-content">

                            <h4>Social Network</h4>
                            <p>
                                A Single-page web forum allowing user interactions via followings, posts, comments, and likes and communicate via group or private messaging.
                            </p>
                            <small className='text-light'>React, Go, RESTful API, and SQLite3 Migrations</small>
                        </div>
                        <div className="recent-project-links">
                            <a href="https://github.com/Jasonasante/social-network-01" className='btn-primary'> GitHub</a>
                        </div>
                    </article>
                    <article className='recent-project-card'>
                        <div className='recent-project-image'>
                            <img src={RealTimeForum} alt="Real Time Forum" />
                        </div>
                        <div className="recent-project-content">
                            <h4>Real Time Forum</h4>
                            <p>
                                A Single-page web forum allowing user interactions via posts, comments, and likes and communicate via private messaging.
                            </p>
                            <small className='text-light'>JavaScript, Go, RESTful API, and SQLite3</small>
                        </div>
                        <div className="recent-project-links">
                            <a href="https://github.com/Jasonasante/real-time-forum" className='btn-primary'> GitHub</a>
                        </div>
                    </article>
                    <article className='recent-project-card'>
                        <div className='recent-project-image'>
                            <img src={MakeYourGame} alt="Brick Invaders" />
                        </div>
                        <div className="recent-project-content">
                            <h4>Brick Invaders</h4>
                            <p>Video Game infusion of brick-breaker and space-invaders.</p>
                            <small className='text-light'>JavaScript, HTML, CSS</small>
                        </div>
                        <div className="recent-project-links">
                            <a href="https://01f-make-your-game-public.vercel.app/?lvl=1" className='btn-primary'> Play</a>
                        </div>
                    </article>
                </div>
            </div>
            <div className='more-projects'>
                <a href="#/projects" className='btn-primary'>Projects <AiOutlineArrowRight className='recent-projects-icon' /></a>
            </div>
        </section>
    )
}

export default RecentProjects