import React, { useState } from 'react'
import './anime-list.css'
import { SiMyanimelist } from 'react-icons/si'
import { IoClose } from 'react-icons/io5'

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

const AnimeList = () => {
    const [visible, setVisible] = useState(false)
    const OpenAnime = () => {
        setVisible(visible => !visible)
        document.body.style.overflowY = "hidden"
        window.scrollTo(0, 0)
    }

    const CloseAnime = () => {
        setVisible(visible => !visible)
        document.body.style.overflowY = "auto"
    }

    return (
        <>
            {visible &&
                <div className="anime-container">
                    <div className="anime">
                        <div className='anime-header'>
                            <h3>Favourite Anime</h3>
                            <button className='anime-close' onClick={CloseAnime}><IoClose className='close-icon' /></button>
                        </div>
                    </div>
                </div>
            }
            <article className='other-card coming-soon'>
                <SiMyanimelist className='other-icon' />
                <h5>Anime Tier List</h5>
            </article>
        </>
    )
}

export default AnimeList