import React, { useRef, useState } from 'react';
import { Card, Image, Segment, Button, Header, Menu, MenuItem, Container, Sidebar } from 'semantic-ui-react';
import Section from './Section';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Portfolio from './Portfolio';


const AcercaDeMi = () => {
  const experienciaSectionRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  const [sidebarDirection, setSidebarDirection] = useState('left'); 


  const handleMenuItemClick = (name, direction) => {
    setActiveItem(name);
    setVisibleSidebar(true);
    setSidebarDirection(direction); 
  };

  const SidebarContentAboutMe = () => (
    <div>
     <Aboutme/>
    </div>
  );

  const SidebarContentSkills = () => (
    <div>
      <Header as='h3'>Skills Sidebar</Header>
      <p>Content for Skills Sidebar goes here.</p>
    </div>
  );

  const SidebarContentWorkExperience = () => (
    <div>
      <Header as='h3'>Work Experience Sidebar</Header>
     <Section/>
    </div>
  );

  const SidebarContentPortfolio = () => (
   
    <Segment>
      
      <Portfolio/>
      
    </Segment>
  
  );

  const SidebarContentCoctact = () => (
   <Segment >
    
     <Contact/>
     </Segment>
  
    
  );

  return (
    <Container>
    <Segment textAlign='center'>
      <Header as='h2'>
        <Menu inverted widths={4}>

          <Menu.Item onClick={() => handleMenuItemClick('about me', 'left')}>
            <Image size='mini' circular src='./public/zorrocara.png' />
            About me

          </Menu.Item>
          <Menu.Item onClick={() => handleMenuItemClick('skills', 'top')}>
            Skills
          </Menu.Item>

          <Menu.Item onClick={() => handleMenuItemClick('work experience', 'right')}>
            Work Experience
          </Menu.Item>
          
    

          <Menu.Item onClick={() => handleMenuItemClick('contact', 'top')}>
            Contact
          </Menu.Item>
        </Menu>
      </Header>
      

        <div className="imagen0"></div>
        <div className="info1">
          <Card centered>
            {/* <Image src='./public/fotoae.jpg' wrapped ui={false} /> */}
          </Card>

          <h2>Hola, soy Alejandro</h2>
          <h1>Diseñador y<br />desarrollador Web</h1>
        </div>

        <div className="redes" id="acerca">
          <Button circular color='linkedin' icon='linkedin' />
          <Button circular color='grey' icon='github' />
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
        style={{ background: 'linear-gradient(rgba(229, 255, 0, 0.81), rgba(100, 100, 100, 0.91))', border: "solid", }}
      >

        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width:"40rem" }}>
    {/* Contenido del Sidebar */}
    {activeItem === 'about me'  && <SidebarContentAboutMe  />}
    {activeItem === 'skills' && <SidebarContentSkills />}
    {activeItem === 'work experience' && <SidebarContentWorkExperience />}
   
    {activeItem === 'contact' && <SidebarContentCoctact />}
  </Container>
      </Sidebar>
    </Container>
  );
};

export default AcercaDeMi;
