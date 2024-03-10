import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Container, Card, Segment, Button, Icon } from 'semantic-ui-react';

function Skills() {
  return (
    <Container style={{ background: '#445355', border: "none"  , padding:"0rem", margin:"0rem" }}>
      <Button>
      Skills</Button>
      <Segment style={{ padding: '0' }}>
        <AwesomeSlider
          className="logo-slider"
          bullets={false}
          organicArrows={true}
          infinite={true}
          mobileTouch={true}
          virtualize={true}
          style={{ width: '100%', height: '3.8rem', margin:"0.1rem" }}
        >
          <div>
            <Card>
              <Card.Content>
                <Card.Description>
                  <img src="/LogoReact.png" alt="Logo 1" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                  {/* <Icon size='big' name='js'/> */}
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Content>
                <Card.Description>
                  <img src="logo2.png" alt="Logo 2" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Content>
                <Card.Description>
                  <img src="logo3.png" alt="Logo 3" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          {/* Añade más divs para más logos */}
        </AwesomeSlider>
      </Segment>
    </Container>
  );
}

export default Skills;



{/*   <p class="author">🦊 Hecho por <a href="https://github.com/JAEB720" target="_blank">JAEB720</a></p> */}
   