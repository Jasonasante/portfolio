import React, { useState } from 'react'
import './photoshopArticle.css'
import { SiAdobephotoshop } from 'react-icons/si'
import { IoClose } from 'react-icons/io5'
import { FaDeviantart, FaInstagram } from 'react-icons/fa'
import ImageWithLoader from '../Image/image'
import { bottomNavbarDisplay } from '../navbar/navbar'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { return images[item.replace('../../assets/gd', '')] = r(item); });
    return images;
}
function distributeInteger(total, divider, obj) {
    let results = [];
    if (divider === 0) {
        results.push(0);
    } else {
        let rest = total % divider;
        let result = total / divider;

        for (let i = 0; i < divider; i++) {
            if (rest-- > 0) {
                results.push(Math.ceil(result));
            } else {
                results.push(Math.floor(result));
            }
        }
    }
    return results;
}
const images = importAll(require.context('../../assets/gd', false, /\.(png|jpe?g|svg)$/));
const length = Object.keys(images).length
let groups = distributeInteger(length, 4, images).reverse()

const PhotoshopArticle = () => {
    const [visible, setVisible] = useState(false)
    const OpenPhotoshop = () => {
        setVisible(visible => !visible)
        document.body.style.overflowY = "hidden"
        const bottomNavbarArr = Array.from(document.querySelectorAll(".bottom-navbar"))
        bottomNavbarArr.forEach(bottomNavbar => bottomNavbar.style.display = "none")
    }

    const ClosePhotoshop = () => {
        setVisible(visible => !visible)
        document.body.style.overflowY = "auto"
        bottomNavbarDisplay()
    }

    return (
        <>
            {visible &&
                <div className="photoshop-container" style={{ "top": window.scrollY + "px", }}>
                    <div className="photoshop">
                        <div className='photoshop-header'>
                            <div className='photoshop-links'>
                                <a href="https://www.deviantart.com/chumzycreates" target="_blank"><FaDeviantart /></a>
                                <a href="https://www.instagram.com/chumzy.creates/" target="_blank"><FaInstagram /></a>
                            </div>
                            <h3>Chumzy Creates</h3>
                            <button className='photoshop-close' onClick={ClosePhotoshop}><IoClose className='close-icon' /></button>
                        </div>
                        <div className='photoshop-gallery'>
                            <div className="photoshop-column">
                                {
                                    Object.entries(images).map(([key, photo], index) => {
                                        if (index < groups[0]) {
                                            return <><ImageWithLoader src={photo} identifier={key} /></>
                                        }
                                        return null
                                    }
                                    )
                                }
                            </div>
                            <div className="photoshop-column">
                                {
                                    Object.entries(images).map(([key, photo], index) => {
                                        if (index >= groups[0] && index < groups[0] + groups[1]) {
                                            return <><ImageWithLoader src={photo} identifier={key} /></>
                                        }
                                        return null
                                    }
                                    )
                                }
                            </div>
                            <div className="photoshop-column">
                                {
                                    Object.entries(images).map(([key, photo], index) => {
                                        if (index >= groups[0] + groups[1] && index < groups[0] + groups[1] + groups[2]) {
                                            return <><ImageWithLoader src={photo} identifier={key} /></>
                                        }
                                        return null
                                    }
                                    )
                                }
                            </div>
                            <div className="photoshop-column">
                                {
                                    Object.entries(images).map(([key, photo], index) => {
                                        if (index >= groups[0] + groups[1] + groups[2] && index < groups[0] + groups[1] + groups[2] + groups[3]) {
                                            return <><ImageWithLoader src={photo} identifier={key} /></>
                                        }
                                        return null
                                    }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
            <article className='other-card' onClick={OpenPhotoshop}>
                <SiAdobephotoshop className='other-icon' />
                <h5>Photoshop</h5>
            </article>
        </>
    )
}

export default PhotoshopArticle