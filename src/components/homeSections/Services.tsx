import "./Services.css"

export function Services(){
   return (
      <section id="services">
         <div className="servicesHeader">
            <h2>Nossos serviços</h2>

            <p>Desenvolvemos projetos elétricos modernos, seguros e de qualidade.
            <br />
            Nosso corpo técnico é formado por engenheiros eletricistas, civis e mecânicos e técnicos em altamente qualificados.
            </p>
         </div>

         <div className="CardsWrapper">
            <div className="card solar">
               <p>Projetos Solar</p>
            </div>
            <div className="card eletric">
               <p>Projetos Elétricos</p>
            </div>
            <div className="card mec">
               <p>Projetos Mecânicos</p>
            </div>
            <div className="card net">
               <p>Projetos Telecom</p>
            </div>
         </div>
      </section>
   )
}