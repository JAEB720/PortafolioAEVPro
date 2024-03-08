import React from 'react';
import { Carousel } from 'react-bootstrap';




const ApiClima = () => {
    
return (
    <div className='imgportafolioModal'>
    <Carousel>
    <Carousel.Item>
        <h2>Proyecto Api-Clima</h2>
        <h3>El proyecto es un aplicacion que manda a llamar una api del clima, muestra el clima segun la localizacion, se puede altenar la temperatura entre Celsius o Fahrenheit, el diseño es responsivo.</h3>
      </Carousel.Item>
    
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/ClimaApp/ApiClimaWeb.png"
          alt="Primera imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/ClimaApp/ApiClimaMovil.png"
          alt="Segunda imagen"
        />
      </Carousel.Item>
  
    </Carousel>
    
    </div>
  );
};
export default ApiClima;