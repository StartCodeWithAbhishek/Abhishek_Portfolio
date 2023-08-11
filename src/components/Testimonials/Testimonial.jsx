import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import certificate1 from "../../img/certificate1.jpg";
import certificate2 from "../../img/certificate2.jpg";
import certificate3 from "../../img/certificate3.jpg";
import certificate4 from "../../img/certificate4.jpg";
import certificate5 from "../../img/certificate5.jpg";

const Testimonial = () => {
  const certifatates = [
    {
      img: certificate1,
      certificateName:
        "JAVA FOUNDATION FROM ORACLE ACADEMY",
    },
    {
      img: certificate2,
      certificateName:
        "PROGRAMMING ESSENTIALA IN C from CISCO NETWORKING ACADEMY",
    },
    {
      img: certificate3,
      certificateName:
        "NSE-3 NETWORK SECURITY ASSOCIATE from FORTINET",
    },
    {
      img: certificate4,
      certificateName:
        "CLOUD FOUNDATION from AWS ACADEMY",
    },
    {
      img: certificate5,
      certificateName:
        "MACHINE LEARNING from AWS ACADEMY",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>certification i have done while learning technologies</span>
        <span><br/>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {certifatates.map((certifatates, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={certifatates.img} alt="" />
                <span>{certifatates.certificateName}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;

