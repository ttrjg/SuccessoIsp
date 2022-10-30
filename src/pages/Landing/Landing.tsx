import "./Landing.css"
import {Home} from "../../components/homeSections/Home"
import { About } from "../../components/homeSections/About"
import { Services } from "../../components/homeSections/Services"
import { Clients } from "../../components/homeSections/Clients"
import { Contact } from "../../components/homeSections/Contact"


export function Landing() {

   return(
      <div>
         <Home />
         <About />
         <Services />
         <Clients />
         <Contact />
      </div>
      
   )
}