import "./Landing.css"
import {Home} from "../../components/homeSections/Home"
import { About } from "../../components/homeSections/About"
import { Services } from "../../components/homeSections/Services"
import { Clients } from "../../components/homeSections/Clients"
import { Contact } from "../../components/homeSections/Contact"

interface getRefs {
   refs?: any[]
}

export function Landing(props: getRefs) {

   return(
      <div className="main">
         <Home />
         <About />
         <Services />
         <Clients />
         <Contact />
      </div>
      
   )
}