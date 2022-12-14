import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, EffectFade, Autoplay } from "swiper";
import { ReadMore } from '../General/ReadMore';

import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade"

import "./Home.css"

import slide1 from "../../assets/slides/SolarEnergySlide.jpg"
import slide2 from "../../assets/slides/NetSlide.png"
import slide3 from "../../assets/slides/AutomationSlide.jpg"
import slide4 from "../../assets/slides/MecanicSlide.png"





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

            modules={[Mousewheel, Pagination, EffectFade, Autoplay]}
         >
            <SwiperSlide>
               <img src={slide1} />
               <div className="swiperContent">
                  <div>
                     <p>Projetos de Energia Solar</p> 
                     <div className="divider1"></div>
                  </div>
                  <ReadMore link="energia-solar"/>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <img src={slide3} />
               <div className="swiperContent">
                  <div>
                     <p>Automação Industrial</p>
                     <div className="divider1"></div> 
                  </div>
                  
                  <ReadMore link="engenharia-eletrica"/>
               </div>
            </SwiperSlide>
            
            <SwiperSlide>
               <img src={slide4} />
               <div className="swiperContent">
                  <div>
                     <p>Projetos Mecânicos</p>
                     <div className="divider1"></div> 
                  </div>
                  <ReadMore link="engenharia-mecanica"/> 
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <img src={slide2} />
               <div className="swiperContent">
                  <div>
                     <p>Projetos Redes de Telecom</p> 
                     <div className="divider1"></div>
                  </div>
                  
                  <ReadMore link="telecom"/>
               </div>
            </SwiperSlide>


      
         </Swiper>   
         <div className="divider"></div>    
      </section>      
   )
}