import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Login.style.scss";

function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!login.trim() || !senha.trim()) {
      setError("Preencha todos os campos");
      return;
    }
    setError(null);
    localStorage.setItem("username", login);
    navigate("/dashboard");
  };
  return (
    <>
      <div className="loginPage">
        <div className="loginPage__header">
          <img src={logo} alt="Logo" />
        </div>
        <div className="loginPage__content">
          <h1>Faça seu login</h1>
          <h2>
            <span className="name-primary">Meu</span>
            <span className="name-secondary">Gestor</span>
          </h2>
        </div>
        <div className="loginPage__formContainer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="login"
              placeholder="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
