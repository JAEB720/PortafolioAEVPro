import React, { useRef, useState } from 'react';
import { Card, Image, Segment, Button, Header, Menu, Container, Sidebar, Modal } from 'semantic-ui-react';
import Section from './Section';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Skills from './Skills';

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

  const SidebarContentWorkExperience = () => (
    <div>
      <Header as='h3'>Work Experience</Header>
      <Section />
    </div>
  );

  const handleCloseModal = () => {
    setVisibleModal(false);
  };

  const SidebarContentPortfolio = () => (
    <Segment>
      <Portfolio />
    </Segment>
  );

  const SidebarContentContact = () => (
    <Segment>
      <Contact />
    </Segment>
  );

  return (
    <Container className='ContenedorCenter' style={{ border: "none", padding: "0.2rem", borderRadius: "5px", margin: "0.5rem" }}>
      <Segment style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))', border: "none", color: "", padding: "0.2rem", borderRadius: "5px", margin: "0.1rem", }}>
        <Header as='h2' >
          <Menu inverted widths={3} style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))', border: "", color: "#ADCCEA", padding: "0.3rem", borderRadius: "5px", margin: "0.5rem", fontSize: "0.5em" }} >
            <Menu.Item style={{ background: 'linear-gradient(rgba(252, 252, 252, 0.5), rgba(0, 0, 0, 0.9))', border: "solid 1px", color: "white", padding: "0.2rem", borderRadius: "5px", margin: "0.1rem" }} onClick={() => handleMenuItemClick('about me', 'left')}>
              <Image size='mini' style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))', border: "", color: "", padding: "0.2rem", borderRadius: "5px", margin: "0rem" }} circular src='/zorrocara.png' />
              About me
            </Menu.Item>
            <Menu.Item style={{ background: 'linear-gradient(rgba(252, 252, 252, 0.5), rgba(0, 0, 0, 0.9))', border: "solid 1px", color: "#ADCCEA", padding: "0.2rem", borderRadius: "5px", margin: "0.1rem" }} onClick={() => handleMenuItemClick('work experience', 'right')}>
              Work Experience
            </Menu.Item>
            <Menu.Item style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))', border: "solid 1px", color: "#ADCCEA", padding: "0.2rem", borderRadius: "5px", margin: "0.1rem" }} onClick={() => handleMenuItemClick('contact', 'top')}>
              Contact
            </Menu.Item>
          </Menu>
        </Header>

        <div className="imagen0"></div>
        <div className="info1">
          <Card centered style={{ background: 'black', border: "solid blue 1px", color: "#ADCCEA", borderRadius: "25px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)" }} >
            <Image src='/ae.jpg' wrapped ui={false} style={{ overflow: "hidden" }} />
          </Card>

          <h2>Hola, soy Alejandro</h2>
          <h1>Diseñador y<br />desarrollador Web</h1>
        </div>

        <div className="redes" id="acerca">
          <Button circular color='linkedin' icon='linkedin' />
          <Button circular color='black' icon='github' />
          <Button circular color='green' icon='whatsapp' />
          <Button circular color='white' icon='mail' />
        </div>

        <div className="acerca">
          <h2>Acerca de mi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum alias<br />
            delectus quaerat at quod sit. Iusto harum repellendus cupiditate. Id velit architecto <br />
            repellendus illo repudiandae dolor voluptates tenetur nemo aperiam quidem tempora <br />
            praesentium ipsa maiores illum, minima quia dolorem, laudantium,<br />
            libero eius? Excepturi culpa porro possimus voluptatem.
          </p>
        </div>
      </Segment>

      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={() => setVisibleSidebar(false)}
        direction={sidebarDirection}
        visible={visibleSidebar}
        width='huge'
        style={{ background: '#000000', border: "solid", }}
      >
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: "40rem" }}>
          {/* Contenido del Sidebar */}
          {activeItem === 'about me' && <SidebarContentAboutMe />}
          {/* {activeItem === 'skills' && <SidebarContentSkills />} */}
          {activeItem === 'work experience' && <SidebarContentWorkExperience />}
          {activeItem === 'portfolio' && <SidebarContentPortfolio />}
          {activeItem === 'contact' && <SidebarContentContact />}
        </Container>
      </Sidebar>

      <Modal open={visibleModal} onClose={handleCloseModal}>
        <Modal.Header>Contact</Modal.Header>
        <Modal.Content>
          <Contact />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={handleCloseModal} negative>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </Container>
  );
};

export default ContainerCenter;
