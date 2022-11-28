import { Route, Routes } from "react-router-dom";
import { EletricalEng } from "./pages/EletricalEng";
import { Landing } from "./pages/Landing";
import { MechanicalEng } from "./pages/MechanicalEng";
import { NetPage } from "./pages/NetPage";
import { SolarEnergy } from "./pages/SolarEnergy";
import { AccessPage } from "./pages/AccessPage";
import { Login } from "./components/Form-Login/Login";
import { RegisterForm } from "./components/Form-Register/RegisterForm";



export function Router() {

   return (
      
      <Routes>
         <Route path="/" element={<Landing/>}/>
         <Route path="/energia-solar" element={<SolarEnergy />}/>
         <Route path="/engenharia-eletrica" element={<EletricalEng />}/>
         <Route path="/telecom" element={<NetPage />}/>
         <Route path="/engenharia-mecanica" element={<MechanicalEng />}/>
         <Route path="/access-page" element={<AccessPage />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<RegisterForm />} />
         </Route>
      </Routes>
   )
}