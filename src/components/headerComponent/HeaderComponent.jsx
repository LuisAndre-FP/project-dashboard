import { useEffect, useState } from "react";
import "./HeaderComponent.scss";
import { FaSearch, FaBell } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import thinking from "../../assets/thinking.png";

function Header() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUsername(user.name);
    }
  }, []);

  return (
    <header className="header">
      <div className="headerLogo">
        <img src={logo} alt="MeuGestor" />
        <h1>MeuGestor</h1>
      </div>

      <div className="headerMensagem">
        <img src={thinking} alt="Avatar" className="Avatar" />
        <h1>Olá, {username}</h1>
      </div>

      <div className="headerSearch">
        <input type="text" placeholder="Search" />
        <FaSearch className="icon" />
      </div>

      <div className="headerActions">
        <div className="company"></div>

        <div className="notifications">
          <FaBell className="bell" />
          <span className="dot"></span>
        </div>
      </div>
    </header>
  );
}
export default Header;
