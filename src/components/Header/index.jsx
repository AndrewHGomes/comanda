import { Link } from "react-router-dom";
import titulo from "./Header.module.css";

const Header = () => {
  return (
    <header className={titulo.header}>
      <img src="/toggle.png" alt="menu" />
      <Link to="/">
        <h2>MESAS</h2>
      </Link>
      <Link to="/produtos">
        <h2>PRODUTOS</h2>
      </Link>
      <div></div>
    </header>
  );
};

export default Header;
