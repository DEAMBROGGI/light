import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../style/style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import datos from "./datos"

export default function Carrousel() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        
        className="mySwiper"
      >
          {datos.map(evento =>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL+ `/imagenes/${evento.image}`} />
          <h3>{evento.name}</h3>
        </SwiperSlide>
        
          )}
      </Swiper>
    </>
  );
}
