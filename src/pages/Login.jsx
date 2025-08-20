import { useState } from 'react'

function Login () {
      const [login, setLogin] = useState(null)
      const [senha, setSenha] = useState(null)
      return (
        <>
        <form>
            <input type='text' name='login' placeholder='Login' value={login} onChange={(e) => {
                setLogin(e.target.value)
            }}/>
            <input type='password' name='senha' placeholder='Senha' value={senha} onChange={(e) => {
                setSenha(e.target.value)
            }} />
            <button type='submit'>Login</button>
        </form> 
        </>
      )
}
export default Login;   
