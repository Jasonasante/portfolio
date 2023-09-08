import React, { useState, useEffect } from 'react'
import './projectDescription.css'
import { IoClose } from 'react-icons/io5'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import ImageWithLoader from '../Image/image'


const ProjectDescription = ({ onClose, index, projects }) => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [projectIndex, setProjectIndex] = useState(index)
    let project = projects[projectIndex]
    console.log(screenSize)
    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);

        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    function previousProject() {
        setProjectIndex(prevIndex => prevIndex - 1)
    }
    function nextProject() {
        setProjectIndex(prevIndex => prevIndex + 1)
    }
    return (
        <>
            <div className="project-container" style={{ "top": window.scrollY + "px", }}>
                <div className="project">
                    <div className='project-header'>
                        <div className="project-links">
                            {
                                Object.entries(project.links).map(([key, value]) => {
                                    return (
                                        <a href={value} className='btn-primary' key={key} target="_blank" >{key}</a>
                                    );
                                })
                            }
                        </div>
                        <h2>{project.title}</h2>
                        <button className='project-close' onClick={onClose}><IoClose className='close-icon' /></button>
                    </div>
                    <div className="project-summary">
                        <h4>{project.summary}</h4>
                    </div>
                    <div className="project-details">
                        <div>
                            {screenSize.width > 1024 &&
                                <button type="button" onClick={previousProject} style={{ "color": projectIndex !== 0 ? "var(--color-primary-variant)" : "transparent" }} disabled={projectIndex !== 0 ? false : true} ><AiOutlineLeft /></button>
                            }
                        </div>
                        <ImageWithLoader src={project.image} identifier={project.title} />
                        <div className="project-description">
                            <h5>{project.languages}</h5>
                            <div>{
                                Object.entries(project.description).map(([key, value]) => {
                                    return (
                                        <p>{value}</p>
                                    );
                                })
                            }</div>
                        </div>
                        <div>
                            {screenSize.width < 1024 &&
                                <button type="button" onClick={previousProject} style={{ "color": projectIndex !== 0 ? "var(--color-primary-variant)" : "transparent" }} disabled={projectIndex !== 0 ? false : true} ><AiOutlineLeft /></button>
                            }
                            <button type="button" onClick={nextProject} style={{ "color": projectIndex !== projects.length - 1 ? "var(--color-primary-variant)" : "transparent" }} disabled={projectIndex !== projects.length - 1 ? false : true} ><AiOutlineRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function getCurrentDimension() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}

export default ProjectDescription
