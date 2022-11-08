import { Contact } from "../../components/homeSections/Contact";
import { Brands } from "../../components/SolarComponents/Brands";
import { InvestSolarEnergy } from "../../components/SolarComponents/InvestSolarEnergy";
import { SolarBanner } from "../../components/SolarComponents/SolarBanner";
import { SolarProjects } from "../../components/SolarComponents/SolarProjects";
import { WhyIsp } from "../../components/SolarComponents/WhyIsp";

import './SolarEnergy.css'


export function SolarEnergy() {
   
   function scrollTop() {
      window.scrollTo({
         top:0,
         behavior:"smooth"
      })
   }

   setTimeout(scrollTop,5)
   

   return (
      <div>
         <SolarBanner />
         <InvestSolarEnergy />
         <WhyIsp />
         <Brands />
         <SolarProjects />
         <Contact /> 
      </div>
   )
}