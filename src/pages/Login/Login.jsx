import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAndGetUser } from "../../services/Auth";
import saly from "../../assets/saly-14.svg";
import apple from "../../assets/apple.svg";
import Facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import Logo from "../../assets/logo.svg";
import "./Login.style.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim() || !senha.trim()) {
      setError("Preencha todos os campos");
      return;
    }
    setError(null);
    setLoading(true);

    try {
      const { user } = await loginAndGetUser({ email, password: senha });

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }

      navigate("/dashboard");
    } catch (err) {
      const apiMsg = err?.response?.data || err?.message || "Falha no login";
      setError(typeof apiMsg === "string" ? apiMsg : "Falha no login");
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <div className="loginPage">
        <div className="loginPage__header">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="loginPage__content">
          <h1>Faça seu login</h1>
          <h2>
            <span className="name-primary">Meu</span>
            <span className="name-secondary">Gestor</span>
          </h2>

          <p>
            Se você ainda não possui uma conta. <br />
            Você pode se <a href="/register">Registrar aqui!</a>
          </p>

          <img src={saly} alt="ilustração" />
        </div>

        <div className="loginPage__formContainer">
          <h3>Login</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <div className="forgotPassword">
              <a href="/forgot-password">Esqueci minha senha</a>
            </div>

            {error && <p className="error">{error}</p>}

            <button type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Login"}
            </button>
          </form>

          <div className="Divider">ou continue com</div>
          <div className="socialLogins">
            <img src={google} alt="Google logo" />
            <img src={Facebook} alt="Facebook logo" />
            <img src={apple} alt="Apple logo" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
