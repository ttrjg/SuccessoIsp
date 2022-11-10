import { Section } from "../../components/EletricalComponents/Section";
import { HomeEletricalEng } from "../../components/EletricalComponents/HomeEletricalEng";
import { Banner } from "../../components/PageBanner/Banner";
import { EletricalProjects } from "../../components/EletricalComponents/EletricalProjects";

export function EletricalEng() {

   function scrollTop() {
      window.scrollTo({
         top:0,
         behavior:"smooth"
      })
   }

   setTimeout(scrollTop,5)

   return(
      <div>
         <Banner 
            img="src\assets\Banners\EletricalBanner.jpg" 
            content="ESTEJA PRONTO PARA O FUTURO"
         />
         <HomeEletricalEng />
         <Section 
            Title="Projetos executivos" 
            Color="blue"  
            Content="
            Projetos elétricos minusiosamente desenvolvidos pensando na segurança, economia e comodidade de nossos clientes.
            Projetos desenvolvidos conforme a sua necessidade. Afim de evitar futuras adequações e manutenções em suas instalações.
            "
            img="src\assets\EleticalPage\ExecutiveProject.jpg"
         />
         <Section   
            Title="Paineís Industriais" 
            Content="
            Projetos elétricos minusiosamente desenvolvidos pensando na segurança, economia e comodidade de nossos clientes.

            Projetos desenvolvidos conforme a sua necessidade. Afim de evitar futuras adequações e manutenções em suas instalações.
            "
            img="src\assets\EleticalPage\PaineisEletricos.jpg"
         />
         <Section
            Title="Automação Industrial e Reformas de máquinas" 
            Color="blue"    
            Content="
            Projetos elaborados analisando a real necessidade do seu processo, onde entregamos um relatório detalhado sobre o desenvolvimento da máquina ou equipamento a ser desenvolvido ou reformado para uma melhor eficiência.
            "
            img="src\assets\EleticalPage\Automação.jpg"
         />
         
         <EletricalProjects />

      </div>
   )
} 