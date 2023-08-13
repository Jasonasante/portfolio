import React from 'react'
import './other.css'
import { SiMyanimelist } from 'react-icons/si'
import { PiTelevisionSimpleDuotone } from 'react-icons/pi'
import PhotoshopArticle from './photoshopArticle'

const OtherLinks = () => {
    return (
        <div className="other-links">
            <PhotoshopArticle />
            <article className='about-me-card'>
                <SiMyanimelist className='about-icon' />
                <h5>My Anime List</h5>
            </article>
            <article className='about-me-card'>
                <PiTelevisionSimpleDuotone className='about-icon' />
                <h5>TV Tier List</h5>
            </article>
        </div>
    )
}

export default OtherLinks