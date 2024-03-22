import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { Container, Card, Segment, Button, Icon, Image } from 'semantic-ui-react';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Skills() {
  
  return (
    <Container style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))', border: "none", padding:"0rem"  }}>
      
      <Button>Skills</Button>

      <Segment style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))', border: "none", padding:"0.5rem" }}>
      <Button>Front-end</Button>
        <AutoplaySlider
      
          bullets={false}
          organicArrows={false}
          infinite={true}
          mobileTouch={true}
          virtualize={true}
          play={true}
          cancelOnInteraction={false} 
          interval={5000}
          style={{ width: '100%', height: '3.8rem', margin:"0.1rem", background: 'linear-gradient(rgba(229, 255, 0, 0.1), rgba(100, 100, 100, 0.1))', border: "none", padding:"0rem",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)" }}
        >
          <div>
            <Card >
              <Card.Content > 
                <Card.Description  >
                  <Image  src="/skills/html.png" alt="Logo 1" style={{ maxWidth: '20%', maxHeight: '20%' }} />
                  <Button>HTML</Button>
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Content>
                <Card.Description>
                  <Image src="/skills/css.png" alt="Logo 2" style={{ maxWidth: '20%', maxHeight: '20%' }} />
                  <Button>CSS</Button>
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Content>
                <Card.Description>
                  <Image src="/skills/js.png" alt="Logo 3" style={{ maxWidth: '20%', maxHeight: '20%' }} />
                  <Button>JavaScript</Button>
                </Card.Description>
              </Card.Content>
            </Card>
          </div>

          <div>
            <Card>
              <Card.Content>
                <Card.Description>
                  <Image src="/skills/react.png" alt="Logo 4" style={{ maxWidth: '20%', maxHeight: '20%' }} />
                  <Button>React</Button>
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
         
        </AutoplaySlider>
      </Segment>
      
      <Segment style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))', border: "none", padding:"0.5rem", }} >
        
           <Button>Technology</Button>
<AutoplaySlider
      
          bullets={false}
          organicArrows={false}
          infinite={true}
          mobileTouch={true}
          virtualize={true}
          play={true}
          cancelOnInteraction={false} 
          interval={5000}
          style={{ width: '100%', height: '3.8rem', margin:"0.1rem", margin:"0.1rem", background: 'linear-gradient(rgba(229, 255, 0, 0.9), rgba(100, 100, 100, 0.9))', border: "none", padding:"0rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)"}}
        >
         
     <div>
            <Card >
            
              <Card.Content>
                <Card.Description>
                  <Image src="/skills/semantic.png" alt="Logo 5" style={{ maxWidth: '20%', maxHeight: '20%' }} /> 
                  <Button>Semantic UI React</Button>
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Content>
                <Card.Description>
                  <Image src="/skills/three.png" alt="Logo 6" style={{ maxWidth: '20%', maxHeight: '20%' }} />
                  <Button>Three.JS</Button>
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Content>
                <Card.Description>
                  <Image src="/skills/npm.png" alt="Logo 7" style={{ maxWidth: '20%', maxHeight: '20%' }} />
                  <Button>Npm</Button>
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Content>
                <Card.Description>
                  <Image src="/skills/git.png" alt="Logo 8" style={{ maxWidth: '20%', maxHeight: '20%' }} />
                  <Button>Git</Button>
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
            
        </AutoplaySlider>
</Segment>

{/* 
<Segment>
<Button>Back-End</Button>
<AutoplaySlider
        animation="cubeAnimation"
          className="logo-slider"
          bullets={false}
          organicArrows={true}
          infinite={true}
          mobileTouch={true}
          virtualize={true}
          play={true}
          cancelOnInteraction={false} 
          interval={5000}
          style={{ width: '100%', height: '3.8rem', margin:"0.1rem" }}
        >
     <div>
            <Card>
              <Card.Content>
                <Card.Description>
                  <img src="/skills/js.png" alt="Logo 4" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Content>
                <Card.Description>
                  <img src="/skills/js.png" alt="Logo 5" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Content>
                <Card.Description>
                  <img src="/skills/js.png" alt="Logo 6" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
            
        </AutoplaySlider>
</Segment> */}

    </Container>
  );
}

export default Skills;



{/*   <p class="author">🦊 Hecho por <a href="https://github.com/JAEB720" target="_blank">JAEB720</a></p> */}
   