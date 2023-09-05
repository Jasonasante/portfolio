import React, { useEffect } from 'react'
import { useState } from 'react';
import './image.css'


export function MyImage({src}) {
    const [loading, setLoading] = useState(true);
    return (
        <div className='photoshop-img-container' style={
            {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                "aspectRatio": loading? "1/1":"",
                "marginTop": "8px",
            }
        } >
            <img src={src} style={
                {
                    display: loading ? "none" : "block",
                    width: "100%",
                    animation: "fadeIn 0.5s",
                }
            }onLoad={(e)=>{setLoading(false)}} ></img>
            <div className="spinner" style={{
                display: loading ? "block" : "none",
            }} >
                <div className="simple-spinner">
                    <span></span>
                </div>
            </div>
        </div>)
}

export default MyImage
