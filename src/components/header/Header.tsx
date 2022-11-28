
import { List, X } from "phosphor-react"
import { useState } from "react"

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
            
               if ((id.replace("/#","")) === element.getAttribute('id')){
                  link.classList.add("active")
               }
            })            
         }
      })      
      
   }

   document.addEventListener("scroll", activeSectionByScroll) 

   const [modalActive, setModalActive] = useState(false)

   function toggleStatus(){
      setModalActive(!modalActive)
      console.log(modalActive)
      const open:any = document.querySelector(".Open")
      const close:any = document.querySelector(".Close")
      const modal:any = document.querySelector(".Modal")
      modalActive ? (   
         open.classList.remove("hidden"),
         close.classList.add("hidden"),
         modal.classList.add("hidden")
      ) :
      (
         open.classList.add("hidden"),
         close.classList.remove("hidden"),
         modal.classList.remove("hidden")
      )
   }

   return(
      
      <header>
         <div className="content">
            <a href="/#home"><img src={logo} alt="" /></a>                 

            {window.innerWidth > 768
            ? 
               <nav>
               <ul>
                  <li>
                     <a href="/#home" > Home</a>  
                  </li>
                  <li>
                     <a href="/#about" > Sobre</a>         
                  </li>
                  <li>
                     <a href="/#services" > Serviços</a>  
                  </li>
                  <li>
                     <a href="/#clients" > Clientes</a>  
                  </li>
                  <li>
                     <a href="/#contact" > Contato</a>  
                  </li>
               </ul>
               </nav>
            : 
               <div className="ModalMenu">
                  <List size={34} className="Open" onClick={toggleStatus}/>
                  <X size={34} className="Close hidden" onClick={toggleStatus}/>
                     <div className="Modal hidden">
                        <ul>
                              <li>
                                 <a href="/#home" onClick={toggleStatus}> Home</a>  
                              </li>
                              <li>
                                 <a href="/#about" onClick={toggleStatus}> Sobre</a>         
                              </li>
                              <li>
                                 <a href="/#services" onClick={toggleStatus}> Serviços</a>  
                              </li>
                              <li>
                                 <a href="/#clients" onClick={toggleStatus}> Clientes</a>  
                              </li>
                              <li>
                                 <a href="/#contact" onClick={toggleStatus}> Contato</a>  
                              </li>
                        </ul>
                     </div>
               </div>
            }

         </div>       
      </header>

      
   )
}
   
   