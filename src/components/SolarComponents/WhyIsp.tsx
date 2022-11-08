import { Brain, Handshake, SketchLogo } from "phosphor-react"
import "./WhyIsp.css"

export function WhyIsp() {
   return (
      <div className="background">
         <section id="WhyISP">
            <div className="title">
               <h2>Porque a Sucesso ISP?</h2>
               <div className="divider"></div>
            </div>
            

            <div className="CardWrapper">               
               <div className="Card">
                  <Brain size={80} color="#29FF77" weight="duotone" />
                  <div>
                     <h3>Conhecimento</h3>
                     
                  </div>
                  <p>
                  Equipe qualificada com anos de experiencia em grandes projetos de geração de energia, Analizamos a real necessidade de cada um de nossos clientes, buscando esclarecer todas as duvidas com maior transparência possivel.
                  </p>
               </div>
               <div className="Card"> 
                  <SketchLogo size={80} color="#29FF77" weight="duotone" />
                  <div>
                     <h3>Qualidade</h3>
                     
                  </div>               
                  <p>
                  Utilizamos as marcas mais conceituadas no mercado, além de técnicos altamente treinados, para garantir a estabilidade e segurança de cada sistema e pessoa envolvida.
                  </p>
               </div>
               <div className="Card">
                  <Handshake size={80} color="#29FF77" weight="duotone" />
                  <div>
                     <h3>Tranquilidade</h3>
                     
                  </div>
                  <p>
                     Prestamos o serviço completo, para que nossos clientes não se preocupem com nada. A partir do  fechamento do contrato, realizamos todos os passos necessários até a aprovação de seu projeto sem incomodação.
                  </p>
               </div>
            </div>
      </section>
      </div>
      
   )
}