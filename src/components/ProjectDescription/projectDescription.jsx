import React from 'react'
import './projectDescription.css'
import { IoClose } from 'react-icons/io5'
import ImageWithLoader from '../Image/image'


const ProjectDescription = ({ project, onClose }) => {
    return (
        <>
            <div className="project-container" style={{ "top": window.scrollY + "px", }}>
                <div className="project">
                    <div className='project-header'>
                        <div className="project-links">
                            {
                                Object.entries(project.links).map(([key, value]) => {
                                    return (
                                        <a href={value} className='btn-primary' key={key} >{key}</a>
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
                        <ImageWithLoader src={project.image} identifier={project.title} />
                        <div className="project-description">
                            <h5>{project.languages}</h5>
                            <p>{project.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDescription
