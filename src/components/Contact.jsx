import React, { useRef } from 'react';
import { Card, Image, Segment, Button, Header, Menu, MenuItem, Container, Sidebar } from 'semantic-ui-react';


function Contact() {
  const experienciaSectionRef = useRef(null);
  return (
    <Container lassName="pie" id="contacto">
      {/* CONTACTO */}
      <Segment id="Contacto">
        <h2>Contacto</h2>
        <div className="contenedor-contacto">
          <div className="cont1">
            <div className="phoneC">
              <img src="iconos/phone.svg" alt="" />
            </div>
            <div className="Cspan"><span>NúmeroCelular</span></div>
            <div className="CTexto"><p>8138621542</p></div>
          </div>
          <div className="cont2">
            <div className="mailC">
              <img src="iconos/mail 1.svg" alt="" />
            </div>
            <div className="Cspan"><span>Email</span></div>
            <div className="CTexto"><p>jeuescobarbernudez@gmail.com</p></div>
          </div>
        </div>
      </Segment>
{/* 
      <p class="author">🦊 Hecho por <a href="https://github.com/JAEB720" target="_blank">JAEB720</a></p> */}
    </Container>
   
  );
}

export default Contact;
