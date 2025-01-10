import { Link } from "react-router-dom";
import titulo from "./Header.module.css";
// import { useState } from "react";

const Header = () => {
  // const [caminho, setCaminho] = useState("/");

  // const trocarCaminho = () => {};

  return (
    <header className={titulo.header}>
      <img src="/toggle.png" alt="menu" />
      <Link to="/">
        <h1>MESAS</h1>
      </Link>
      <Link to="/produtos">
        <h1>PRODUTOS</h1>
      </Link>
      <div></div>
    </header>
  );
};

export default Header;
