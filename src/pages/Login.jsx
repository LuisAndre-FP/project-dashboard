import { useState } from "react";
import "../styles/global.scss";
function Login() {
  const [login, setLogin] = useState(null);
  const [senha, setSenha] = useState(null);
  return (
    <>
      <div className="rigth-side">
        <h2>Sign in</h2>
        <form>
          <input
            type="text"
            name="login"
            placeholder="Enter email or user name"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <input
            type="password"
            name="senha"
            placeholder="Password"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
          <button type="submit">Login</button>
        </form>

        <div className="social-login">
          <p>or continue with</p>
          <div className="icons">
            <img src="/Facebook.png" alt="Facebook" />
            <img src="/apple.png" alt="Apple" />
            <img src="/google.png" alt="Google" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
