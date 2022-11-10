import {Home} from "../components/homeSections/Home"
import { About } from "../components/homeSections/About"
import { Services } from "../components/homeSections/Services"
import { Clients } from "../components/homeSections/Clients"
import { Contact } from "../components/General/Contact"


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