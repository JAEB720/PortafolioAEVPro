import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { Container, Card, Segment, Button, Icon } from 'semantic-ui-react';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Skills() {
  
  return (
    <Container style={{ background: '#445355', border: "none"  , padding:"0rem", margin:"0rem" }}>
      
      <Button>Skills</Button>

      <Segment style={{ padding: '0' }}>
      <Button>Front-end</Button>
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
                  <img src="/skills/html.png" alt="Logo 1" style={{ maxWidth: '20%', maxHeight: '20%' }} />
                  {/* <Icon size='big' name='js'/> */}
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Content>
                <Card.Description>
                  <img src="/skills/css.png" alt="Logo 2" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Content>
                <Card.Description>
                  <img src="/skills/js.png" alt="Logo 3" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
        
         
        </AutoplaySlider>
      </Segment>
      
      <Segment>
        
           <Button>Technology</Button>
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
                  <img src="/skills/semantic.png" alt="Logo 4" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Content>
                <Card.Description>
                  <img src="/skills/three.png" alt="Logo 5" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Content>
                <Card.Description>
                  <img src="/skills/npm.png" alt="Logo 6" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Content>
                <Card.Description>
                  <img src="/skills/git.png" alt="Logo 6" style={{ maxWidth: '100%', maxHeight: '100%' }} />
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
   