import "./App.css";

export default function App() {
  return (
    <div className="product-list">
      <div className="product">
        <img src="https://cdn.awsli.com.br/600x450/1545/1545522/produto/265475803/r7--18-150-q95oyyg8ny.jpg" alt="Produto 1" width="150px" className="foto-produto"/>
        <h3 className="foto-produto">Produto 1</h3>
        <p className="foto-produto">R$ 50,00</p>
      </div>
      <div className="product">
        <img src="https://cdn.awsli.com.br/2500x2500/1854/1854248/produto/310847027/93fd1f850a103975221b181930fc86c3-7nxcujncdu.jpg" alt="Produto 2" width="150px" className="foto-produto"/>
        <h3 className="foto-produto">Produto 2</h3>
        <p className="foto-produto">R$ 70,00</p>
      </div>
      <div className="product">
        <img src="https://images.tcdn.com.br/img/img_prod/1016614/bola_de_vinil_infantil_personagens_mickey_zippy_toys_41405_1_02f5d1534c87d60ad574a062f9bdcb33.jpg" alt="Produto 3" width="150px" className="foto-produto"/>
        <h3 className="foto-produto">Produto 3</h3>
        <p className="foto-produto">R$ 90,00</p>
      </div>
    </div>
  );
}