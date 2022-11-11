import { Banner } from "../components/General/Banner"
import { Contact } from "../components/General/Contact"
import { ProjectsGalery } from "../components/General/ProjectsGalery"
import { Section } from "../components/General/Section"
import { HomeMechanicalEng } from "../components/MechanicalComponents/HomeMechanicalEng"

export function MechanicalEng() {

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
            img="src\assets\MechanicalPage\MecanicSlide.png" 
            content="ESTEJA PRONTO PARA O FUTURO"
         />

         <HomeMechanicalEng />

         <Section 
            Title="Moldes de injeção termoplástica e zamac" 
            Color="blue"  
            Content="
            Moldes de injeção possuem a possibilidade de se confeccionar peças mais complexas do que o tradicional método da usinagem, sendo a melhor opção para produção de produtos específicos e em alta escala de produção.
            "
            img="src\assets\MechanicalPage\Molde.jpg"
         />
         <Section   
            Title="Estampos de corte, dobra e repuxo" 
            Content="
            Desenvolvimento de estampos diversos, como estampos de corte, dobra, repuxos e progressivos. Realizamos um estudo em seu produto e levantamos as melhores opções de fabricação do estampo, diminuindo o disperdício de materia prima na fabricação. Tendo um produto bem distribuido a ser estampada, garante o mínimo de refugo e máximo aproveitamento do material.
            "
            img="src\assets\MechanicalPage\Estampo.jpg"
         />
         <Section
            Title="Dispositivos diversos e desenhos de peças" 
            Color="blue"    
            Content="
            A impantação de um dispositivo de adpatação, pode aumentar a produtividade de em um equipamento, assim prolongando sua vida util. Desenhos de peças e produtos seguindo as normas vigentes para que você possa realizar usinagens em grande escala e garantir a qualidade e dimenções das peças.
            "
            img="src\assets\MechanicalPage\Dispositivos.jpg"
         />
         <Section
            Title="Automação Industrial e Reformas de máquinas"    
            Content="
            Projetos elaborados analisando a real necessidade do seu processo, onde entregamos um relatório detalhado sobre o desenvolvimento da máquina ou equipamento a ser desenvolvido ou reformado para uma melhor eficiência.
            "
            img="src\assets\EleticalPage\Automação.jpg"
         />
         
         <ProjectsGalery
            images={[
               'src/assets/MechanicalPage/Projetos/EnvasadoraBaterias.png',
               'src/assets/MechanicalPage/Projetos/EsteiraDatador.png',
               'src/assets/MechanicalPage/Projetos/AlimentadorBarras.png',
               'src/assets/MechanicalPage/Projetos/DispositivoAutomacao.png',
               'src/assets/MechanicalPage/Projetos/PeçaBomba.png',
               'src/assets/MechanicalPage/Projetos/AlicateOdontologico.png',
               'src/assets/MechanicalPage/Projetos/PinçaTransporte.png',
               'src/assets/MechanicalPage/Projetos/EstampoProgressivo.png',
               'src/assets/MechanicalPage/Projetos/EstampoInox.png',
               'src/assets/MechanicalPage/Projetos/MoldeTermoformagem.png',
               'src/assets/MechanicalPage/Projetos/MoldeTermoplatico.png',
               'src/assets/MechanicalPage/Projetos/MoldeZemak1.png',
            ]}
         />

         <Contact /> 

      </div>
   )
} 