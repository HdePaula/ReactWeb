import React from 'react';
import './Footer.css';

export default function Footer(props) {
  return (
    <section className='Footer'>
      <div className='Texto'>
        <p>
          Este é um site onde estou desenvolvento para desenvolver meus conhecimentos 
          em desenvolvento Web.
          <br/>
          Estou utilizando React.js.
        </p>
      </div>

      <div className='Contatos'>
        <ul>
          <li>
            <h3>Instagram: {props.insta}</h3>
          </li>
          <li>
            <h3>Facebook: {props.face}</h3>
          </li>
        </ul>
      </div>
    </section>
  );
}