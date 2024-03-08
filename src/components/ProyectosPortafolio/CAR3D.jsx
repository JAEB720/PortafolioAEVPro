import React from 'react';
import { Carousel } from 'react-bootstrap';




const CAR3D = () => {
    
return (
    <div className='imgportafolioModal'>
    <Carousel>
    <Carousel.Item>
        <h2>Vehiculo 3D</h2>
        <h3>Es un proyecto de un vehiculo 3D con el cual se puede interactuar, se dezpliega un modal que contiene la pieza seleccionada y esta es una pieza en 3D con la cual tambien se puede interactuar y esta animada.</h3>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/Card3D/Card3dPrincipal.png"
          alt="Primera imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/Card3D/Car3DT.png"
          alt="Segunda imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/Card3D/Car3D.png"
          alt="Tercera imagen"
        />
      </Carousel.Item>
    
      
    </Carousel>
    
    </div>
  );
};
export default CAR3D;