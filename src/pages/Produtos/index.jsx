import Produto from "../../components/Produto";
import produtos from "./Produtos.module.css";

import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";
import img9 from "../../assets/9.png";
import img10 from "../../assets/10.png";
import img11 from "../../assets/11.png";
import img12 from "../../assets/12.png";
import img13 from "../../assets/13.png";
import img14 from "../../assets/14.png";

const todosProdutos = [
  {
    id: 1,
    img: img1,
    nome: "Bebidas e Refrigerantes",
  },
  {
    id: 2,
    img: img2,
    nome: "Pizzas e Calzones",
  },
  {
    id: 3,
    img: img3,
    nome: "Doses e Caipirinhas",
  },
  {
    id: 4,
    img: img4,
    nome: "Panquecas",
  },
  {
    id: 5,
    img: img5,
    nome: "Água e sucos",
  },
  {
    id: 6,
    img: img6,
    nome: "Batata Recheada",
  },
  {
    id: 7,
    img: img7,
    nome: "Lanches",
  },
  {
    id: 8,
    img: img8,
    nome: "Saladas e Porções",
  },
  {
    id: 9,
    img: img9,
    nome: "Vinhos e Vinhos da Casa",
  },
  {
    id: 10,
    img: img10,
    nome: "Doces e Sobremesas",
  },
  {
    id: 11,
    img: img11,
    nome: "Panquecas Doces",
  },
  {
    id: 12,
    img: img12,
    nome: "Sorvetes",
  },
  {
    id: 13,
    img: img13,
    nome: "Pizzas Doces",
  },
  {
    id: 14,
    img: img14,
    nome: "Rodízio",
  },
];

const Produtos = () => {
  return (
    <section className={produtos.container}>
      {todosProdutos.map(({ id, img, nome }) => (
        <Produto key={id} imgProduto={img} nomeProduto={nome} />
      ))}
    </section>
  );
};

export default Produtos;
