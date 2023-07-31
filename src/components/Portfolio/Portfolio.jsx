import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/booking.png";
import Ecommerce from "../../img/reuseU.png";
import HOC from "../../img/translate.png";
import MusicApp from "../../img/dance.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://github.com/StartCodeWithAbhishek/BookMyRoom">
          <img src={Sidebar} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://abhidanceacademyrewa.onrender.com/">
          <img src={MusicApp} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/StartCodeWithAbhishek/TextUtils">
          <img src={HOC} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
