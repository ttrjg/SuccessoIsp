import "./RegisterForm.css"

export function RegisterForm() {


   return(
      
      <div id="RegisterForm">
         <form >
            <label>
               <h2>Nome</h2>
               <input name="name"  type="text" placeholder="Digite seu nome" required />
            </label>

            <label>
               <h2>Email</h2>
               <input name="email"  type="email" autoComplete="on" placeholder="Digite seu e-mail" required />
            </label>

            <label>
               <h2>Senha</h2>
               <input name="password"  type="password" placeholder="Digite sua senha" required />
            </label>

            <button type="submit">Registar</button>
         </form>
         <img src="/src/assets/bgLogin2.jpg" alt="" />
      </div>
      
   )
}