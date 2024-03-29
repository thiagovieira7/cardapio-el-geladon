import "./Home.css";
import PaletaLista from "./PaletaLista";
import sacola from "../assets/icons/sacola.svg";
import logo from "../assets/logo.svg";

function Home() {
  return (
    <div className="Home">
      <div className="Home__header Header">
        <div className="row">
          <div className="Header__logo Logo">
            <img
              src={logo}
              width="70px"
              alt="Logo El Geladon"
              clasName="Logo__icone"
            />
            <span className="Logo__titulo"> El Geladon </span>
          </div>
          <div className="Header__opcoes Opcoes">
            <div className="Opcoes__sacola Sacola">
              <img
                src={sacola}
                width="40px"
                className="Sacola__icone"
                alt="Sacola de compras"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
  );
}

export default Home;
