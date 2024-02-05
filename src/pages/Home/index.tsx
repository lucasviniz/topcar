import './styles.css';
import CarImg from 'assets/images/car.png';

const Home = () => {
  return (
    <>
    <div className="card-car bg-primary">
      <img src={CarImg} className="img-car" alt="Carro modelo" />
      <div className="description-car">
        <h2>O carro perfeito para você</h2>
        <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
      </div>
    </div>

    <div className='card-button'>
        <button type="button" className="btn btn-primary">Ver Catálogo</button>
        <p>Comece agora a navegar</p>
    </div>
    </>
  );
};

export default Home;
