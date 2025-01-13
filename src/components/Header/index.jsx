import { Link } from "react-router-dom";
import titulo from "./Header.module.css";
import { useReducer } from "react";

const Header = () => {
  const [display, toggleDisplay] = useReducer((valor) =>
    valor === "flex" ? "none" : "flex"
  );

  return (
    <header className={titulo.header}>
      <img src="/toggle.png" alt="menu" onClick={toggleDisplay} />
      <div style={{ display }} className={titulo.hidden}>
        <Link to="/login">
          <p>Atualizar Dados</p>
        </Link>
      </div>
      <Link to="/">
        <h2>MESAS</h2>
      </Link>
      <Link to="/produtos">
        <h2>PRODUTOS</h2>
      </Link>
      <div className={titulo.circulo}></div>
    </header>
  );
};

export default Header;
