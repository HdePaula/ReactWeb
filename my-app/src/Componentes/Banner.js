import React from "react";
import './Banner.css';

function App() {

  return (
    <section>
        <div className="titleBanner">
                <div className="alinhamento">
                    <h1>Escolha uma sessão!</h1>
                </div>
        </div>

        <section className="container"> {/*futuramenta adicionar um onMouseEnter para consertar o bug
                                            da cor, quando o mouse esta no titulo*/}
            <div className="box1">
                <div className="title">
                    <div className="fog"></div>
                    <h3>Animes</h3>
                </div>
            </div>

            <div className="box2">
                <div className="title">
                    <div className="fog"></div>
                    <h3>Mangá</h3></div>
                </div>

            <div className="box3">
                <div className="title">
                    <div className="fog"></div>
                    <h3>Filmes de terros</h3>
                </div>
            </div>

        </section>
    </section>
  );
}

export default App;
