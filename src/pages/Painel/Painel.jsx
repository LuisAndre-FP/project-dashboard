import "./Painel.style.scss";
import Header from "../../components/headerComponent/HeaderComponent";
import Sidebar from "../../components/headerComponent/Sidebar/Sidebar";

function Painel() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="painelContent">
        <h1>Dashboard</h1>
        <p>sou lindo demais, teste painel </p>
      </div>
    </>
  );
}
export default Painel;
