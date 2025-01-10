/* eslint-disable react/prop-types */
import produto from "./Produto.module.css";

const Produto = ({ imgProduto, nomeProduto }) => {
  return (
    <div className={produto.content}>
      <div>
        <img src={imgProduto} alt="Produto" />
      </div>
      <div>{nomeProduto}</div>
    </div>
  );
};

export default Produto;
