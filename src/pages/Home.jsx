import { Outlet, Link } from "react-router-dom";
import dashboard from "../styles/Dashboard.module.css";
import MainContent from "../components/MainContent";

const Home = () => {
  return (
    <main className={dashboard.menu}>
      <header>
        <img src="/toggle.png" alt="menu" />
        <Link to="/produtos">
          <h1>PRODUTOS</h1>
        </Link>
        <Link to="/historico">
          <div></div>
        </Link>
      </header>
      <MainContent />
      <Outlet />
      <footer>
        <h3>SUPORTE</h3>
      </footer>
    </main>
  );
};

export default Home;
