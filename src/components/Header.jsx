import titulo from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={titulo.header}>
      <img src="/toggle.png" alt="menu" />
      <h1>PRODUTOS</h1>
      <div></div>
    </header>
  );
};

export default Header;
