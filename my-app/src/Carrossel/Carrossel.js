import './Carrossel.css';
import Img from './image/oficina.jpg';

function Carrossel() {
  //programação em js
  

  return (
    <div className="carrosselFotos">
      <img alt='ender3' src='https://content.instructables.com/ORIG/FPT/KFFI/KI1PF6NM/FPTKFFIKI1PF6NM.jpg?auto=webp&fit=bounds&frame=1&height=1024&width=1024auto=webp&frame=1&height=150'></img>
      <img alt='oficina' src={Img}></img>
      <img alt='codigo' src='https://assets-blog.hostgator.com.br/wp-content/uploads/2022/01/technology-gb824f8eb1_1920.webp'></img>
    </div>
  );
}

export default Carrossel;
