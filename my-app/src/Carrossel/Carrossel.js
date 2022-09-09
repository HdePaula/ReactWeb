import './Carrossel.css';
import Img from './image/oficina.jpg';
import ArrowL from './image/left.png';
import ArrowR from './image/right.png';
import {useRef} from 'react'

function Carrossel() {
  //programação em js
  const carrossel = useRef(null);

  const handleLeftClick = (e) =>{
    e.preventDefault(); //tratando o evento
    console.log(carrossel.current.offsetWidth); //mostrara no console a largura do elemento
    carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
  }

  const handleRightClick = (e) =>{
    e.preventDefault();
    console.log(carrossel.current.offsetWidth);
    carrossel.current.scrollLeft += carrossel.current.offsetWidth;
  }

  return (
    <section className='conteiner'>
      <div className='carrossel' ref={carrossel}>
        <div className='item'>
          <div className='image'>
          <img alt='ender3' src='https://content.instructables.com/ORIG/FPT/KFFI/KI1PF6NM/FPTKFFIKI1PF6NM.jpg?auto=webp&fit=bounds&frame=1&height=1024&width=1024auto=webp&frame=1&height=150'></img>
          </div>
        </div>
        <div className='item'>
          <div className='image'>
            <img alt='oficina' src={Img}></img>
          </div>
        </div>
        <div className='item'>
          <div className='image'>
          <img alt='codigo' src='https://assets-blog.hostgator.com.br/wp-content/uploads/2022/01/technology-gb824f8eb1_1920.webp'></img>
          </div>
        </div>
      </div>

      <div className='buttons'>
        <button onClick={handleLeftClick}><img src={ArrowL} alt='Scroll Left'/></button>
        <button onClick={handleRightClick}><img src={ArrowR} alt='Scroll Right'/></button>
      </div>
    </section>
  );
}

export default Carrossel;
