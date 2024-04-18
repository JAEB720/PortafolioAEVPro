// Section.js
import React, {useRef} from 'react';
import {  Button, Image, Icon, Segment, Container, } from 'semantic-ui-react'

const Section = () => {
  const experienciaSectionRef = useRef(null);
  return (
    <Container fluid>
    <Segment className="Experiencia" id="experiencia">

      <div className="experiencia">
       

        <Button   color='linkedin' > 
        <p className="fecha">2023-2024</p><br />
        <span>Developer</span><br />
          SunshineBodyshop 
        <Image   centered size='mini' src='/logo.png' />
        </Button>

      </div>
    </Segment>
    </Container>
  );
};

export default Section;
