import { Link } from "react-router-dom"
import "./Login.css"

export function Login() {

   function submitLogin(){   
   }


   return(
      
      <div id="LoginForm">
         <form onSubmit={submitLogin}>
            <label>
               <h2>Email</h2>
               <input name="email"  type="email" autoComplete="on" placeholder="Digite seu e-mail" required />
            </label>

            <label>
               <h2>Senha</h2>
               <input name="password"  type="password" placeholder="Digite sua senha" required />
               <div className="links">
                  <a href="">Esqueci minha senha</a>
                  <Link to="/access-page/register"><p>Registar</p></Link> 
                </div>
            </label>
            

            <button type="submit">Entrar</button>
         </form>
         <img src="/src/assets/bgLogin2.jpg" alt="" />
      </div>
      
   )
}
