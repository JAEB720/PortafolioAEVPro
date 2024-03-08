import React from 'react';
import { Carousel } from 'react-bootstrap';




const GalletaFortuna = () => {
    
return (
    <div className='imgportafolioModal'>
    <Carousel>
    <Carousel.Item>
        <h2>Galleta Fortuna</h2>
        <h3>El proyecto una "Galleta de la fortuna" al darle click al boton de mi fortuna, cambia la fortuna, el autor y el fondo de manera aleatoria.</h3>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/GalletaFortuna/Captura de pantalla (31).png"
          alt="Primera imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/GalletaFortuna/Captura de pantalla (32).png"
          alt="Segunda imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/GalletaFortuna/Captura de pantalla (33).png"
          alt="Segunda imagen"
        />
      </Carousel.Item>
    
     
    </Carousel>
    
    </div>
  );
};
export default GalletaFortuna;