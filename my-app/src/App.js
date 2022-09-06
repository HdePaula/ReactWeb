import Header from './Componentes/Header.js';
import Footer from './Componentes/Footer.js';
import Carrossel from './Carrossel/Carrossel.js';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Carrossel />
        <Footer insta='@dePaulah' face='Henrique de Paula'/>
    </div>
  );
}

export default App;
