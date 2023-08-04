import React from 'react'
import './technologies.css'
import HTMLLogo from '../../assets/HTML5.png'
import CSSLogo from '../../assets/CSS.png'
import JSLogo from '../../assets/js.png'
import GoLogo from '../../assets/golang.png'
import ReactLogo from '../../assets/react.png'
import SQLLogo from '../../assets/sqlite3.png'

const Technologies = () => {
    return (
        <div className='technologies'>
            <img className='html-img' alt="html logo" src={HTMLLogo} loading='lazy' />
            <img className='css-img' alt="css logo" src={CSSLogo} loading='lazy' />
            <img className='html-img' alt="html logo" src={JSLogo} loading='lazy' />
            <img className='html-img' alt="html logo" src={ReactLogo} loading='lazy' />
            <img className='html-img' alt="html logo" src={GoLogo} loading='lazy' />
            <img className='html-img' alt="html logo" src={SQLLogo} loading='lazy' />
        </div>
    )
}

export default Technologies