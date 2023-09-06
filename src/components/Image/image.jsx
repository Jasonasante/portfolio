import React from 'react'
import { useState } from 'react';
import './image.css'


export function ImageWithLoader({ src, identifier }) {
    const [loading, setLoading] = useState(true);
    return (
        <div className='img-container' key={identifier} style={
            {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                "aspectRatio": loading ? "1/1" : "",

            }
        } >
            <img src={src} alt="" style={
                {
                    display: loading ? "none" : "block",
                    width: "100%",
                    animation: "fadeIn 0.5s",
                }
            } onLoad={(e) => { setLoading(false) }} ></img>
            {loading &&
                <div className="spinner" style={{
                    display: loading ? "block" : "none",
                }} >
                    <div className="simple-spinner">
                        <span></span>
                    </div>
                </div>}

        </div>)
}

export default ImageWithLoader
