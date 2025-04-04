import React, { useRef, useState } from 'react';
import { Card, Image, Segment, Button, Header, Menu, Container, Sidebar, Modal } from 'semantic-ui-react';
import Section from './Section';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Portfolio from './Portfolio';

const ContainerCenter = () => {
  const experienciaSectionRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  const [sidebarDirection, setSidebarDirection] = useState('left');
  const [visibleModal, setVisibleModal] = useState(false);

  const handleMenuItemClick = (name, direction) => {
    if (name === 'contact') {
      setVisibleModal(true);
    } else {
      setActiveItem(name);
      setVisibleSidebar(true);
      setSidebarDirection(direction);
    }
  };

  const SidebarContentAboutMe = () => (
    <div>
      <Aboutme />
    </div>
  );

  const handleCloseModal = () => {
    setVisibleModal(false);
  };

  const handleRedirect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer'); 
  };

  return (
    <Container className='ContenedorCenter' style={{ border: "none", padding: "0.2rem", borderRadius: "5px", margin: "1rem" }}>
      <Header as='h2'>
        <Menu fluid 
          style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))', border: "", color: "#ADCCEA", padding: "0.3rem", borderRadius: "5px", fontSize: "0.5em", width: '320px' }}>
          <Image size='mini' style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))', border: "", color: "", padding: "0.2rem", borderRadius: "5px", margin: "0rem" }}
           circular src='zorrocara.png' />
           
            <h2  style={{ fontFamily: 'monaco,Consolas,Lucida Console,monospace',
               lineHeight: '0.5', color: '#333',  fontSize: '0.9rem',
                marginLeft: "1rem", marginTop: "auto" }}>Alejandro EScobar</h2>

          <Menu.Item position="right" 
            style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))', border: "none", color: "white", borderRadius: "5px", margin: "0.1rem" }}
            onClick={() => handleMenuItemClick('about me', 'left')}>
            sobre mi+
          </Menu.Item>
        </Menu>
      </Header>

      <div className="imagen0"></div>
      <div className="info1">

      <Card centered   style={{ position: 'relative', background: 'white', border: "solid Skyblue 1px",
         color: "#ADCCEA", borderRadius: "25px", boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.9)",   overflow: 'hidden'  }}>
      <Image  src='SORAK-.png' wrapped ui={false} style={{ borderRadius: "25px",  }} />
      <Image  
        src='/gif/Fox1.gif' 
        alt="icon" 
        style={{ 
          background: "transparent",
          position: 'absolute', 
          bottom: '-50px', 
          right: '-70px', 
          width: '80%', 
          height: '60%', 
        
       
        }} 
      />
    </Card>


      <h3 className='hname' style={{ fontFamily: 'monaco,Consolas,Lucida Console,monospace', lineHeight: '1.6', color: '#333',  }}>
       Hola, soy Alejandro
    </h3>

        <h1 style={{ fontFamily: 'Source Code Pro, monospace', lineHeight: '1.6', color: '#3993DD' }} >
          Desarrollador web<br />y de software</h1>
      </div>

      <div className="redes" id="acerca" style={{ marginTop:"0.5rem",  }} >
      <h3 style={{ fontFamily: 'Source Code Pro, monospace', lineHeight: '1.6', color: '#333' }} >
        <br /> Contactame!</h3>
        <Button size='big'   target='_blank' circular color='linkedin' icon='linkedin' onClick={() => handleRedirect('https://www.linkedin.com/in/alejandro-escobar-447330260/')} />
        <Button size='big' circular color='black' icon='github' onClick={() => handleRedirect('https://github.com/JAEB720')} />
        <Button size='big' circular color='green' icon='whatsapp' onClick={() => handleRedirect('https://wa.me/tu_numero')} />
        <Button size='big' circular color='grey' icon='mail' onClick={() => handleMenuItemClick('contact', 'top')} />
      </div>

      <div className="acerca">
        <h2 style={{ marginTop: '20px', fontSize: '2rem', lineHeight: '1.5' }}>
          Acerca de mí
        </h2>
        <h4 style={{ fontSize: '1.20rem', lineHeight: '1.6', color: '#333', fontFamily: 'monaco,Consolas,Lucida Console,monospace', lineHeight: '1.6', }}>
          Soy una persona autodidacta, bastante versátil, responsable, me encanta resolver problemas,
          me gusta mejorar las cosas para facilitar mi trabajo, me gusta trabajar en equipo pero también
          sé tomar el mando cuando es necesario. 
          Tengo experiencia en diferentes áreas, mantenimiento de equipos de oficina,
          instalación de redes, desarrollo web y desarrollo de software. 

          Sigo adquiriendo conocimientos, perfeccionando mis habilidades para ser un mejor desarrollador y profesional.
        </h4>
      </div>

      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={() => setVisibleSidebar(false)}
        direction={sidebarDirection}
        visible={visibleSidebar}
        style={{ background: '#000000', border: "solid", width: '320px' }}
      >
     
        <Button 
        size='tiny' 
          icon='close' 
          onClick={() => setVisibleSidebar(false)} 
          style={{ 
            position: 'absolute', 
            top: '5px', 
            right: '-5px', 
            borderRadius: '5%', 
            background: 'rgba(0,0,0)', 
            color: '#ffffff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
          }} 
        />
        
        {activeItem === 'about me' && <SidebarContentAboutMe />}
      </Sidebar>

      <Modal size='tiny' open={visibleModal} onClose={handleCloseModal} closeIcon>
        <Modal.Header>¡Mándame un correo!</Modal.Header>
        <Modal.Content style={{ marginTop: "-1.5rem", }}>
          <Contact />
        </Modal.Content>
        <Modal.Actions>
        </Modal.Actions>
      </Modal>
    </Container>
  );
};

export default ContainerCenter;
