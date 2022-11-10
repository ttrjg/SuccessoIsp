import { Route, Routes } from "react-router-dom";
import { EletricalEng } from "./pages/EletricalEng";
import { Landing } from "./pages/Landing";
import { NetPage } from "./pages/NetPage";
import { SolarEnergy } from "./pages/SolarEnergy";



export function Router() {


   return (
      
      <Routes>
         <Route path="/" element={<Landing/>}/>
         <Route path="/energia-solar" element={<SolarEnergy />}/>
         <Route path="/engenharia-eletrica" element={<EletricalEng />}/>
         <Route path="/telecom" element={<NetPage />}/>
      </Routes>
   )
}