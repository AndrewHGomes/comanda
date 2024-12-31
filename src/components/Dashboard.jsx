import Mesas from "./Mesas";

import dashboard from "../styles/Dashboard.module.css";

const Dashboard = () => {
  return (
    <section className={dashboard.main}>
      <Mesas ident="P" />
      <Mesas ident={1} />
      <Mesas ident={2} />
      <Mesas ident={3} />
      <Mesas ident={4} />
      <Mesas ident={5} />
      <Mesas ident={6} />
      <Mesas ident={7} />
      <Mesas ident={8} />
    </section>
  );
};

export default Dashboard;
