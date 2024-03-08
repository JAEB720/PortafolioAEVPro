import React from 'react';
import { Carousel } from 'react-bootstrap';




const BuscadorIDS = () => {
return (
    <div className='imgportafolioModal'>
    <Carousel>
    <Carousel.Item>
  <h2>Buscador de ids</h2>
  <h3>Es un sitio web donde los usuarios pueden ver, informacion sobre ubicaciones del universo de "Rick and Morty" mediante el llamado de una Api, se ingresa un id y este se vizualiza, los ids van del 1 al 126.</h3>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/BuscadorIDS/BuscadorID1.png"
          alt="Primera imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/BuscadorIDS/BuscadorID2.png"
          alt="Segunda imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/BuscadorIDS/BuscadorID3.png"
          alt="Tercera imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/BuscadorIDS/BuscadorID4.png"
          alt="Cuarta imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/BuscadorIDS/BuscadorID5.png"
          alt="Quinta imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/BuscadorIDS/BuscadorIDmovil1.png"
          alt="Sexta imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/BuscadorIDS/BuscadorIDmovil2.png"
          alt="Septima imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/BuscadorIDS/BuscadorIDmovil3.png"
          alt="octava imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/public/proyectos/BuscadorIDS/BuscadoIDrmovil4.png"
          alt="novena imagen"
        />
      </Carousel.Item>


    </Carousel>
    
    </div>
  );
};
export default BuscadorIDS;