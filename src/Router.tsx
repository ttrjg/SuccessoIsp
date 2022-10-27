import { Route, Routes } from "react-router-dom";
import { About } from "./components/homeSections/About";
import { Clients } from "./components/homeSections/Clients";
import { Contact } from "./components/homeSections/Contact";
import { Home } from "./components/homeSections/Home";
import { Services } from "./components/homeSections/Services";
import { Landing } from "./pages/Landing/Landing";



export function Router() {


   return (
      
      <Routes>
         <Route path="/" element={<Landing/>}>
            <Route
               path="#home"
               element={<Home/>}
            />
            <Route
               path="#about"
               element={<About/>}
               
            />
            <Route
               path="#services"
               element={<Services />}
            />
            <Route
               path="#clients"
               element={<Clients />}
            />
            <Route
               path="#contact"
               element={<Contact />}
            />
         </Route>
      </Routes>
   )
}