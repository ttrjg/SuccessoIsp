import banner from "../../assets/SolarBanner.jpg"

import './SolarBanner.css'

export function SolarBanner() {
   return(
      <section id="solar-banner">
         <img src={banner} alt="" />
         <div className="BannerContent">
            <h2>
               ESTEJA PRONTO PARA 
               <br />
               <strong>O FUTURO</strong>
            </h2>
            <a href=""></a>
         </div>
      </section>
   )
}