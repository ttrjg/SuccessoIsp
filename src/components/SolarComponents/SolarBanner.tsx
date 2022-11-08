import { WhatsappLogo } from "phosphor-react"
import banner from "../../assets/SolarBanner.png"

import './SolarBanner.css'

export function SolarBanner() {

   function zoom(){
      const img = document.querySelector("#banner")
      img?.classList.add("scale-150")
   } 

   setTimeout(zoom,5)

   return(
      
      <section id="solar-banner">
         
         <div className="img">
            <img src={banner} alt="" id="banner" className=""/>
         </div>
         
         <div className="divider1"></div>
         <div className="BannerContent">
            
            <div className="adjust">
               <h2>
                  ESTEJA PRONTO PARA 
                  <strong>O FUTURO</strong>
               </h2> 
               <div className="divider1"></div> 
            </div>
            
            <a href="" className="button">
               <WhatsappLogo size={32} />
               Peça seu orçamento   
            </a>
         </div>
      </section>
   )

}