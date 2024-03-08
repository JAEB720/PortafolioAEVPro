import React from 'react';
import { Carousel } from 'react-bootstrap';




const EcomerPrimera = () => {
    
return (
    <div className='imgportafolioModal'>
    <Carousel>
    <Carousel.Item>
        <h2>E-commerce</h2> 
       <h3>Proyecto sencillo de una E-commerce, realizado con html, css, javascript, con  diseño responsive.</h3>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/Ecomer/EcomerP.png"
          alt="Primera imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/Ecomer/Captura de pantalla (28).png"
          alt="Segunda imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/Ecomer/Captura de pantalla (30).png"
          alt="Tercera imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/Ecomer/Captura de pantalla (34).png"
          alt="Cuarta imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/Ecomer/Captura de pantalla (35).png"
          alt="Quinta imagen"
        />
      </Carousel.Item>
   
      
    </Carousel>
    
    </div>
  );
};
export default EcomerPrimera;