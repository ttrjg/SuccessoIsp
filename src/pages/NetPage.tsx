import { Section } from "../components/General/Section";
import { Banner } from "../components/General/Banner";
import { NetPageHome } from "../components/NetPageComponents/NetPageHome";
import { Contact } from "../components/General/Contact";
import { ProjectsGalery } from "../components/General/ProjectsGalery";

export function NetPage() {

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
            img="src\assets\slides\NetSlide.png" 
            content="Transformando Provedores de Sucesso"
         />

         <NetPageHome />

         <Section 
            Title="Projeto FTTx" 
            Color="blue"  
            Content="
            Projeto de rede de atendimento (FTTH), Dimensionamento e detalhamento acerca de ruas e avenidas, tipos de postes no trecho entre outros afim de facilitar a instalação, Entregamos o projeto no Google Earth, Esboçando rotas de cabos, localizações de CTO's, CEO e OLT, podendo ser acessado em qualquer lugar. Todo projeto FTTx contém os diagramas unifilares de potência, facilitando a visualização das fusões feitas em cada CTO, CEO e Splitter.
            "
            img="src\assets\Telecom\FTTx.jpeg"
         />
         <Section   
            Title="Projeto Compartilhamento" 
            Content="
            Projeto de compartilhamento de infraestrutura de postes para todas as concessionárias, acompanhamento até o fim do processo, consultoria técnica para analise de viabilidade, onde traçamos a melhor rota de atendimento para os clientes. Contamos com uma equipe com anos de atuação no mercado, onde passamos todas as instruções e informações necessárias para o projeto.
            "
            img="src\assets\Telecom\Compartilhamento.jpeg"
         />

         <ProjectsGalery
            images={[
               'src/assets/EleticalPage/Projetos/LinhaInspecao.png',
               'src/assets/EleticalPage/Projetos/SeccionadoraHorizontal.png',
               'src/assets/EleticalPage/Projetos/TolvaRosqueadoraTampas.png',
               'src/assets/EleticalPage/Projetos/EnvasadoraBaterias.png',
               'src/assets/EleticalPage/Projetos/HotStamp.png',
               'src/assets/EleticalPage/Projetos/MesaVibratoria.png'
            ]}
         />

         <Contact />

      </div>
   )
} 