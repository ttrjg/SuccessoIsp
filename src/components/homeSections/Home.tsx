import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, EffectFade, Autoplay } from "swiper";

import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade"

import "./Home.css"

import slide1 from "../../assets/SolarEnergySlide.jpg"
import slide2 from "../../assets/NetSlide.png"
import slide3 from "../../assets/AutomationSlide.jpg"
import slide4 from "../../assets/MecanicSlide.png"



export function Home() { 

   return (
      <section id="home">
         
         <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            mousewheel={true}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            effect={"fade"}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            modules={[Mousewheel, Pagination, EffectFade, Autoplay]}
         >
            <SwiperSlide><img src={slide1} /></SwiperSlide>
            <SwiperSlide><img src={slide2} /></SwiperSlide>
            <SwiperSlide><img src={slide3} /></SwiperSlide>
            <SwiperSlide><img src={slide4} /></SwiperSlide>
      
         </Swiper>   
         <div className="divider"></div>    
      </section>      
   )
}