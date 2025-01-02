/* eslint-disable react/prop-types */
import dashboard from "../styles/Dashboard.module.css";

const Mesas = ({ ident }) => {
  return <div className={dashboard.mesa}>{ident}</div>;
};

export default Mesas;
