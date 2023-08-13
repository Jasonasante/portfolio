import React from "react";
import './gdSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import twoKids from '../../assets/gd/EncreateChallenge---Template-OS.jpg'
import vines from '../../assets/gd/Vines-no-logo.jpg'
import found from '../../assets/gd/Look-what-I-found.jpg'
import world from '../../assets/gd/look-at-the-world-around-you.jpg'
import escape from '../../assets/gd/the-great-escape.jpg'
import spirit from '../../assets/gd/Spirit-World.jpg'

const GDSlider = () => {
    return (
        <div className="gd-slider-container">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={world} alt="look at the world around you" loading="lazy" /></SwiperSlide>
                <SwiperSlide><img src={twoKids} alt="two kids" loading="lazy" /></SwiperSlide>
                <SwiperSlide><img src={vines} alt="vines" loading="lazy" /></SwiperSlide>
                <SwiperSlide><img src={escape} alt="great escape" loading="lazy" /></SwiperSlide>
                <SwiperSlide><img src={found} alt="look what i found" loading="lazy" /></SwiperSlide>
                <SwiperSlide><img src={spirit} alt="spirit world" loading="lazy" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default GDSlider