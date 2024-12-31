import { Outlet } from "react-router-dom";
import dashboard from "../styles/Dashboard.module.css";
import Dashboard from "../components/Dashboard";

const Home = () => {
  return (
    <main className={dashboard.menu}>
      <header>
        <img src="/toggle.png" alt="menu" />
        <h1>PRODUTOS</h1>
        <div className={dashboard.div}></div>
      </header>
      <Dashboard />
      <Outlet />
      <footer>
        <h3>SUPORTE</h3>
      </footer>
    </main>
  );
};

export default Home;
