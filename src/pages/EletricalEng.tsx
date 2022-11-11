import { Section } from "../components/General/Section";
import { HomeEletricalEng } from "../components/EletricalComponents/HomeEletricalEng";
import { Banner } from "../components/General/Banner";
import { ProjectsGalery } from "../components/General/ProjectsGalery";
import { Contact } from "../components/General/Contact";


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
            Com grande diversidade de produtos procuramos atender todas as necessidades de nossos cliente, desenvolvemos quadros de distribuição de força, quadro de distribuição geral, centros de comando de motores, banco de capacitores, quadros de automação, painéis eletricos para máquinas, entre outros.
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
          
         <ProjectsGalery
            images={[
               'src/assets/EleticalPage/Projetos/LinhaInspecao.png',
               'src/assets/EleticalPage/Projetos/SeccionadoraHorizontal.png',
               'src/assets/EleticalPage/Projetos/TolvaRosqueadoraTampas.png',
               'src/assets/EleticalPage/Projetos/EnvasadoraBaterias.png',
               'src/assets/EleticalPage/Projetos/HotStamp.png',
               'src/assets/EleticalPage/Projetos/MesaVibratoria.png',
               'src/assets/EleticalPage/Projetos/AlimentadorBarras.png',
               'src/assets/EleticalPage/Projetos/DispositivoAutomacao.png'

            ]}
         />

         <Contact /> 

      </div>
   )
} 