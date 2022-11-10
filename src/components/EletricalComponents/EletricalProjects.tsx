import "./EletricalProjects.css"

import project1 from "../../assets/EleticalPage/Projetos/LinhaInspecao.png";
import project2 from "../../assets/EleticalPage/Projetos/TolvaRosqueadoraTampas.png";
import project3 from "../../assets/EleticalPage/Projetos/HotStamp.png";
import project4 from "../../assets/EleticalPage/Projetos/MesaVibratoria.png";



export function EletricalProjects() {
   const images = [project1, project2, project3, project4]

   function createImage() {
      document.createElement("img")
      document.createAttribute("src=")
   }

   return(
      <section id="EletricalProjects">
         

         <div className="projectsHeader">

            <h2>Alguns de nossos projetos</h2>
         
         </div>

         <div className="projectsWrap">
            {images.map((image) =>(
               <img src={image} />
            ))}
         </div>

      </section>
   )
}