import { Link } from "react-router-dom"
import "./Services.css"

export function Services(){
   return (
      <section id="services">
         <div className="servicesHeader">
            <h2>Nossos serviços</h2>

            <p>Desenvolvemos projetos modernos, seguros e de qualidade, nas diversas áreas da engenharia.
            <br />
            Nosso corpo técnico é formado por engenheiros eletricistas, mecânicos e civis além de técnicos altamente qualificados certificados nas NRs.
            </p>
         </div>

         <div className="CardsWrapper">

            <div className="card solar">
               <Link to="energia-solar">
                  <div className="PosiDivider">
                     <p>Projetos Solar</p>                  
                  </div>
                  <div className="divider"></div>          
               </Link>                 
            </div>
            
            <div className="card eletric">
               <Link to="engenharia-eletrica">
                  <div className="PosiDivider">
                     <p>Projetos Elétricos</p>
                  </div>
                  <div className="divider"></div>
               </Link> 
            </div>

            <div className="card mec">
               <Link to="engenharia-mecanica">
                  <div className="PosiDivider">
                     <p>Projetos Mecânicos</p>
                  </div>
                  <div className="divider"></div>
               </Link> 
            </div>

            <div className="card net">
               <Link to="telecom">
                  <div className="PosiDivider">
                     <p>Projetos Telecom</p>
                  </div>
                  <div className="divider"></div>
               </Link> 
            </div>
         </div>
      </section>
   )
}