import Header from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";

import dashboard from "./Home.module.css";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main className={dashboard.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Home;
