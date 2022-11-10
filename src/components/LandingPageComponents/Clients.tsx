import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Keyboard } from "swiper";

import cliente1 from '../../assets/clientes/ValleEspositores.png'
import cliente2 from '../../assets/clientes/BelaVista.png'
import cliente3 from '../../assets/clientes/Brasser.png'
import cliente4 from '../../assets/clientes/DigitalInternet.png'
import cliente5 from '../../assets/clientes/strMundial.png'
import cliente6 from '../../assets/clientes/NetDigital.png'
import cliente7 from '../../assets/clientes/mope.png'
import cliente8 from '../../assets/clientes/JMUsinagem.png'
import cliente9 from '../../assets/clientes/ACROSS.png'
import cliente10 from '../../assets/clientes/avatar.png'
import cliente11 from '../../assets/clientes/Webcom.png'
import cliente12 from '../../assets/clientes/Infonet.png'
import cliente13 from '../../assets/clientes/MaxNet.png'
import cliente14 from '../../assets/clientes/FortNet.png'

import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

import './Clients.css';

export function Clients(){
   return (
      <section id="clients">
         <div className="content">
            <h2>Conheça alguns de nossos clientes</h2>

               <Swiper
                  slidesPerView={5}
                  spaceBetween={10}
                  breakpoints={{
                     0:{
                       slidesPerView: 2,
                     },
                     640: {
                       slidesPerView: 3,
                     },
                     768: {
                       slidesPerView: 4,                    
                     },
                     1024: {
                       slidesPerView: 5,                    
                     },
                   }}
                  pagination={{
                     clickable: true,
                     dynamicBullets: true
                  }}
                  loop={true}
                  keyboard={true}
                  autoplay={{
                     delay: 2500,
                     disableOnInteraction: false
                   }}
                  modules={[Keyboard, Pagination, Autoplay]}                 
               >
                  <SwiperSlide><img src={cliente1}></img></SwiperSlide>
                  <SwiperSlide><img src={cliente2}></img></SwiperSlide>
                  <SwiperSlide><img src={cliente3}></img></SwiperSlide>
                  <SwiperSlide><img src={cliente4}></img></SwiperSlide>
                  <SwiperSlide><img src={cliente5}></img></SwiperSlide>
                  <SwiperSlide><img src={cliente6}></img></SwiperSlide>
                  <SwiperSlide><img src={cliente7}></img></SwiperSlide>
                  <SwiperSlide><img src={cliente8}></img></SwiperSlide>
                  <SwiperSlide><img src={cliente9}></img></SwiperSlide>
                  <SwiperSlide><img src={cliente10}></img></SwiperSlide>
                  <SwiperSlide><img src={cliente11}></img></SwiperSlide>
                  <SwiperSlide><img src={cliente12}></img></SwiperSlide>
                  <SwiperSlide><img src={cliente13}></img></SwiperSlide>
                  <SwiperSlide><img src={cliente14}></img></SwiperSlide>
               </Swiper>  
         </div>
      </section>
   )
}