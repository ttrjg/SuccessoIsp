
import logo from "../../assets/LogoCompleta.svg"
import "./header.css"

export function Header(){  

   function activeSectionByScroll() {
      const sections = document.querySelectorAll("section")
      sections.forEach((element) =>{
         let links = document.querySelectorAll("header a")
         if (((window.scrollY+1) >= element.offsetTop) && (window.scrollY < (element.offsetTop + element.offsetHeight))) {
            links.forEach((link) => {link.classList.remove("active")
            let id:any = link.getAttribute("href")?.toString()
               if ((id.replace("#","")) === element.getAttribute('id')){
                  link.classList.add("active")
               }
            })            
         }
      })      
      
   }

   function hideHeader() {
      const header:any = document.querySelector("header")
      header.classList.toggle("scroll", window.scrollY >= 150)
   }


   document.addEventListener("scroll", hideHeader)
   document.addEventListener("scroll", activeSectionByScroll)
   
   

   return(

      <header className="">
      <a href="/#home"><img src={logo} alt="" /></a>
      
      <nav>
         <ul>
            <li>
               <a href="#home" > Sucesso ISP</a>  
            </li>
            <li>
               <a href="#about" > Sobre</a>         
            </li>
            <li>
               <a href="#services" > Serviços</a>  
            </li>
            <li>
               <a href="#clients" > Clientes</a>  
            </li>
            <li>
               <a href="#contact" > Contato</a>  
            </li>
         </ul>
      </nav>
      
   </header>
   )
}
   
   