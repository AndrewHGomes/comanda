import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Footer from "../components/Footer";

import dashboard from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <main className={dashboard.main}>
        <Dashboard />
      </main>
      <Footer />
    </>
  );
};

export default Home;
