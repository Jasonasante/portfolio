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
import ImageWithLoader from "../Image/image";

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
                <SwiperSlide><ImageWithLoader src={world} /></SwiperSlide>
                <SwiperSlide><ImageWithLoader src={twoKids} /></SwiperSlide>
                <SwiperSlide><ImageWithLoader src={vines} /></SwiperSlide>
                <SwiperSlide><ImageWithLoader src={escape} /></SwiperSlide>
                <SwiperSlide><ImageWithLoader src={found} /></SwiperSlide>
                <SwiperSlide><ImageWithLoader src={spirit} /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default GDSlider