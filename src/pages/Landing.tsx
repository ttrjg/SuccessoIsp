import {Home} from "../components/LandingPageComponents/Home"
import { About } from "../components/LandingPageComponents/About"
import { Services } from "../components/LandingPageComponents/Services"
import { Clients } from "../components/LandingPageComponents/Clients"
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