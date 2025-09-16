import { useEffect, useState } from "react";
import "./HeaderComponent.scss";
import { FaSearch, FaBell } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

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
      <div className="headerMensagem">
        <FaUserCircle className="Avatar" />
        <h1>Olá, {username}</h1>
      </div>

      <div className="headerSearch">
        <input type="text" placeholder="Search" />
        <FaSearch className="icon" />
      </div>

      <div className="headerActions">
        <div className="company">
          <section className="companyInfo">
            <button className="companyButton">
              <FaHamburger />
            </button>
            <span>Burger King</span>
            <IoIosArrowDown className="arrow" />
          </section>
        </div>

        <div className="notifications">
          <FaBell className="bell" />
          <span className="dot"></span>
        </div>
      </div>
    </header>
  );
}
export default Header;
