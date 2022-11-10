import { WhatsappLogo } from "phosphor-react"


import './Banner.css'

interface getData {
   img: string,
   content: string
}

export function Banner(props: getData) {

   function zoom() {
      const img = document.querySelector("#banner")
      img?.classList.add("scale-150")
   }

   setTimeout(zoom, 5)

   return (

      <section id="solar-banner">

         <div className="img">           
            <img src={props.img} alt="" id="banner" className="" />   
         </div>

         <div className="container">
            <div className="divider1"></div>
            <div className="BannerContent">

               <div className="adjust">
                  <h2>
                     {props.content}
                  </h2>
                  <div className="divider1"></div>
               </div>

               <a href="https://api.whatsapp.com/message/BKDKMSKTRJSHH1?autoload=1&amp;app_absent=0" className="button" target="_blank">
                  <WhatsappLogo size={32} />
                  Peça seu orçamento
               </a>
            </div>
         </div>
        
      </section>
   )

}