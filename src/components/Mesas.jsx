/* eslint-disable react/prop-types */
import dashboard from "../styles/Dashboard.module.css";

const Mesas = ({ ident }) => {
  return (
    <div className={dashboard.mesa}>
      <span>{ident}</span>
    </div>
  );
};

export default Mesas;
