import React from 'react'
import './other.css'
import { SiMyanimelist } from 'react-icons/si'
import { PiTelevisionSimpleDuotone } from 'react-icons/pi'
import PhotoshopArticle from './photoshopArticle'
import AnimeList from './anime-list'

const OtherLinks = () => {
    return (
        <div className="other-links">
            <PhotoshopArticle />
            <AnimeList />
            {/* <article className='other-card'>
                <PiTelevisionSimpleDuotone className='other-icon' />
                <h5>TV Tier List</h5>
            </article> */}
        </div>
    )
}

export default OtherLinks