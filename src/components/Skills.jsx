import React from 'react';
import { Container, Card, Grid, Image } from 'semantic-ui-react';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Skills() {
  return (
    <Container style={{ background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(100, 100, 100, 0))', border: "none", padding: "0rem", }}>
      <Grid columns={2} divided stackable style={{ margin: "0.5rem" }}>
        <Grid.Row style={{ margin: '1rem' }}>
          <Grid.Column computer={8} mobile={16}>
            <Card fluid className="animated-card" style={{ border: "none", padding: "0.5rem",}}>
              <Card.Content>
                <Card.Header>Front-end</Card.Header>
                <AutoplaySlider
                  bullets={false}
                  organicArrows={false}
                  infinite={true}
                  mobileTouch={true}
                  virtualize={true}
                  play={true}
                  cancelOnInteraction={false} 
                  interval={5000}
                >
                  <div>
                    <Card >
                      <Card.Content> 
                        <Card.Description>
                          <Image src="/skills/html.png" alt="Logo 1" style={{ maxWidth: '20%', maxHeight: '20%' }} />
                          <p>HTML</p>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </div>
                  <div>
                    <Card>
                      <Card.Content>
                        <Card.Description>
                          <Image src="/skills/css.png" alt="Logo 2" style={{ maxWidth: '20%', maxHeight: '20%' }} />
                          <p>CSS</p>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </div>
                  {/* Add more front-end skills as needed */}
                </AutoplaySlider>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column computer={8} mobile={16}>
            <Card fluid className="animated-card" style={{ border: "none", padding: "0.5rem",  }}>
              <Card.Content>
                <Card.Header>Backend</Card.Header>
                <AutoplaySlider
                  bullets={false}
                  organicArrows={false}
                  infinite={true}
                  mobileTouch={true}
                  virtualize={true}
                  play={true}
                  cancelOnInteraction={false} 
                  interval={5000}
                >
                  <div>
                    <Card >
                      <Card.Content> 
                        <Card.Description>
                          <Image src="/skills/nodejs.png" alt="Logo 3" style={{ maxWidth: '20%', maxHeight: '20%' }} />
                          <p>Node.js</p>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </div>
                  <div>
                    <Card>
                      <Card.Content>
                        <Card.Description>
                          <Image src="/skills/express.png" alt="Logo 4" style={{ maxWidth: '20%', maxHeight: '20%' }} />
                          <p>Express.js</p>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </div>
                  {/* Add more backend skills as needed */}
                </AutoplaySlider>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ marginBottom: '20px' }}>
          <Grid.Column computer={8} mobile={16}>
            <Card fluid className="animated-card" style={{ border: "none", padding: "0.5rem", }}>
              <Card.Content>
                <Card.Header>Languages</Card.Header>
                <AutoplaySlider
                  bullets={false}
                  organicArrows={false}
                  infinite={true}
                  mobileTouch={true}
                  virtualize={true}
                  play={true}
                  cancelOnInteraction={false} 
                  interval={5000}
                >
                  <div>
                    <Card >
                      <Card.Content> 
                        <Card.Description>
                          <Image src="/skills/javascript.png" alt="Logo 5" style={{ maxWidth: '20%', maxHeight: '20%' }} />
                          <p>JavaScript</p>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </div>
                  <div>
                    <Card>
                      <Card.Content>
                        <Card.Description>
                          <Image src="/skills/python.png" alt="Logo 6" style={{ maxWidth: '20%', maxHeight: '20%' }} />
                          <p>Python</p>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </div>
                  {/* Add more language skills as needed */}
                </AutoplaySlider>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column computer={8} mobile={16}>
            <Card className="animated-card" style={{ border: "none", padding: "0.5rem",   }}>
              <Card.Content>
                <Card.Header>Frameworks</Card.Header>
                <AutoplaySlider
                  bullets={false}
                  organicArrows={false}
                  infinite={true}
                  mobileTouch={true}
                  virtualize={true}
                  play={true}
                  cancelOnInteraction={false} 
                  interval={5000}
                >
                  <div>
                    <Card >
                      <Card.Content> 
                        <Card.Description>
                          <Image src="/skills/react.png" alt="Logo 7" style={{ maxWidth: '20%', maxHeight: '20%' }} />
                          <p>React</p>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </div>
                  <div>
                    <Card>
                      <Card.Content>
                        <Card.Description>
                          <Image src="/skills/django.png" alt="Logo 8" style={{ maxWidth: '20%', maxHeight: '20%' }} />
                          <p>Django</p>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </div>
                  {/* Add more framework skills as needed */}
                </AutoplaySlider>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default Skills;
