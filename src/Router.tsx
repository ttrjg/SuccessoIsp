import { Route, Routes } from "react-router-dom";
import { EletricalEng } from "./pages/EletricalEngineering/EletricalEng";
import { Landing } from "./pages/Landing/Landing";
import { SolarEnergy } from "./pages/SolarEnergy/SolarEnergy";



export function Router() {


   return (
      
      <Routes>
         <Route path="/" element={<Landing/>}/>
         <Route path="/energia-solar" element={<SolarEnergy />}/>
         <Route path="/engenharia-eletrica" element={<EletricalEng />}/>
      </Routes>
   )
}