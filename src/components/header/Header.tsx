
import logo from "../../assets/LogoCompleta.svg"
import "./header.css"

export function Header(){  
  
   function toggleStatus(event: any) {
      let links = document.querySelectorAll("a")
      links.forEach((link) => {link.classList.remove("active")})
      event.target.classList.add("active")
   }

   function hideHeader() {
      const header:any = document.querySelector("header")
      header.classList.toggle("scroll", window.scrollY >= 150)
   }


   document.addEventListener("scroll", hideHeader)

   return(

      <header className="">
      <a href="/#home"><img src={logo} alt="" /></a>
      
      <nav>
         <ul>
            <li>
               <a href="#home" onClick={toggleStatus}> Sucesso ISP</a>  
            </li>
            <li>
               <a href="#about" onClick={toggleStatus}> Sobre</a>         
            </li>
            <li>
               <a href="#services" onClick={toggleStatus}> Serviços</a>  
            </li>
            <li>
               <a href="#clients" onClick={toggleStatus}> Clientes</a>  
            </li>
            <li>
               <a href="#contact" onClick={toggleStatus}> Contato</a>  
            </li>
         </ul>
      </nav>
      
   </header>
   )
}
   
   