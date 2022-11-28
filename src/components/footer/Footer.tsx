import { InstagramLogo, FacebookLogo, LinkedinLogo } from 'phosphor-react'
import { Link } from 'react-router-dom'

import logoWhite from "../../assets/logoWhite.png"

import './Footer.css'

export function Footer(){
   return (
      <div className="footer">

         <div className="logo">
            <img src={logoWhite} />
            <p>©2021 Sucesso ISP.</p>
            <p>Todos os direitos reservados.</p>
         </div>

         <div className="Socials">
            <h2>Nossas redes sociais</h2>
            <div className="Social">
               <a href="https://www.instagram.com/sucesso.isp/" target="_blank">
                  <InstagramLogo size={32} color="white"/>
               </a>
               <a href="https://www.facebook.com/sucessoisp" target="_blank">
                  <FacebookLogo size={32} color="white"/>
               </a>
               <a href="https://br.linkedin.com/company/sucesso-isp" target="_blank">
                  <LinkedinLogo size={32} color="white"/>
               </a>
            </div>
            {/* <Link to="access-page/login"><p>Area Restrita</p></Link>   */}
         </div>

      </div>
   )
}