/* eslint-disable react/prop-types */
import mesas from "./Mesas.module.css";

const Mesas = ({ ident }) => {
  return <div className={mesas.mesa}>{ident}</div>;
};

export default Mesas;
