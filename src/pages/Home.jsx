import Header from "../components/Header";
import Footer from "../components/Footer";

import dashboard from "../styles/Home.module.css";
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
