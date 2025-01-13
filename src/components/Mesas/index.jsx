/* eslint-disable react/prop-types */
import mesas from "./Mesas.module.css";

const Mesas = ({ ident }) => {
  const handleColorChange = () => {
    //
  };

  return (
    <div className={mesas.mesa} onClick={handleColorChange}>
      {ident}
    </div>
  );
};

export default Mesas;
