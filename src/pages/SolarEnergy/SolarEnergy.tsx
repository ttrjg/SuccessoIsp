import { Contact } from "../../components/homeSections/Contact";
import { Brands } from "../../components/SolarComponents/Brands";
import { InvestSolarEnergy } from "../../components/SolarComponents/InvestSolarEnergy";
import { Banner } from "../../components/PageBanner/Banner";
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
         <Banner 
            img="src\assets\Banners\SolarBanner.png" 
            content="ESTEJA PRONTO PARA o futuro"
         />
         <InvestSolarEnergy />
         <WhyIsp />
         <Brands />
         <SolarProjects />
         <Contact /> 
      </div>
   )
}