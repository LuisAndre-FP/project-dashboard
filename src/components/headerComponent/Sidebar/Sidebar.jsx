import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.style.scss";
import { logout } from "../../../services/Auth";
import {
  FaChartBar,
  FaShoppingCart,
  FaBox,
  FaTools,
  FaUser,
  FaBuilding,
  FaSignOutAlt,
  FaCogs,
} from "react-icons/fa";
import logo from "../../../assets/logo.png";

function Sidebar() {
  const navigate = useNavigate();

  const handleProducts = () => {
    navigate("/products");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <aside className="sidebar">
        <div className="sidebarLogo">
          <img src={logo} alt="MeuGestor" />
          <h1>MeuGestor</h1>
        </div>
        <div className="sidebarContent">
          <nav className="sidebarSection">
            <h2 className="sidebarTitle">Menu</h2>
            <ul>
              <li>
                <FaChartBar className="icon" />
                <Link
                  to="/dashboard"
                  className="sidebarLink"
                  onClick={handleDashboard}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <FaShoppingCart className="icon" />
                Vendas
              </li>

              <li>
                <FaBox className="icon" />
                <Link
                  to="/products"
                  className="sidebarLink"
                  onClick={handleProducts}
                >
                  Produtos
                </Link>
              </li>

              <li>
                <FaTools className="icon" />
                Materiais
              </li>
            </ul>
          </nav>

          <nav className="sidebarOutros">
            <h2 className="sidebarTitle">Outros</h2>
            <ul>
              <li>
                <FaCogs className="icon" />
                Configurações
              </li>
              <li>
                <FaUser className="icon" />
                Usuarios
              </li>
              <li>
                <FaBuilding className="icon" />
                Empresa
              </li>
              <li>
                <Link
                  to="/login"
                  className="sidebarLink"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt className="icon" />
                  Sair
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
export default Sidebar;
