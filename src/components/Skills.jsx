import React from 'react';
import { Container, Card, Grid, Image, Segment, Button } from 'semantic-ui-react';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Skills() {
  return (
    <Container style={{ background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(100, 100, 100, 0))', border: "none", padding: "0rem", }}>
      <Grid columns={2} divided stackable style={{ margin: "0rem" }}>
        <Grid.Row style={{ margin: '0rem' }}>
          <Grid.Column computer={8} mobile={16}>

            <Card fluid className="animated-card" style={{ border: "none", padding: "0.5rem",}}>
              <Card.Content style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))', }}>
                <Card.Header>Front-end</Card.Header>

                <Segment  style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))', border: "none", padding:"0rem" }}>
    
        <AutoplaySlider
      
          bullets={false}
          organicArrows={false}
          infinite={true}
          mobileTouch={true}
          virtualize={true}
          play={true}
          cancelOnInteraction={false} 
          interval={5000}
          style={{ width: '100%', height: '3.5rem', margin:"0rem", background: 'linear-gradient(rgba(229, 255, 0, 0.1), rgba(100, 100, 100, 0.1))', border: "none", padding:"0rem",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)" }}
        >
          <div>
            <Card  >
              <Card.Content textAlign='center' > 
                <Card.Description  ><Button >
                  <Image  src="/skills/html.png" alt="Logo 1" style={{ maxWidth: '15%', maxHeight: '10%', display:"flex", flexDirection: 'column',  justifyContent: 'center', alignItems: 'center', marginLeft:"6.2rem" }} />
                  HTML</Button>
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Content>
                <Card.Description> <Button>
                  <Image src="/skills/css.png" alt="Logo 2" style={{ maxWidth: '15%', maxHeight: '10%', display:"flex", flexDirection: 'column',  justifyContent: 'center', alignItems: 'center', marginLeft:"6.2rem" }} />
                 CSS</Button>
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Content>
                <Card.Description>  <Button>
                  <Image src="/skills/js.png" alt="Logo 3" style={{ maxWidth: '15%', maxHeight: '10%', display:"flex", flexDirection: 'column',  justifyContent: 'center', alignItems: 'center', marginLeft:"6.2rem" }}/>
                JavaScript</Button>
                </Card.Description>
              </Card.Content>
            </Card>
          </div>

          <div>
            <Card>
              <Card.Content>
                <Card.Description> <Button>
                  <Image src="/skills/react.png" alt="Logo 4" style={{ maxWidth: '15%', maxHeight: '10%', display:"flex", flexDirection: 'column',  justifyContent: 'center', alignItems: 'center', marginLeft:"6.2rem" }} />
                 React</Button>
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
         
        </AutoplaySlider>
      </Segment>
   
              </Card.Content>
            </Card>
          </Grid.Column>





<Grid.Column computer={8} mobile={16}>

<Card fluid className="animated-card" style={{ border: "none", padding: "0.5rem",}}>
  <Card.Content style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))', }}>
    <Card.Header>Back-end</Card.Header>

    <Segment  style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))', border: "none", padding:"0rem" }}>

<AutoplaySlider

bullets={false}
organicArrows={false}
infinite={true}
mobileTouch={true}
virtualize={true}
play={true}
cancelOnInteraction={false} 
interval={5000}
style={{ width: '100%', height: '3.5rem', margin:"0rem", background: 'linear-gradient(rgba(229, 255, 0, 0.1), rgba(100, 100, 100, 0.1))', border: "none", padding:"0rem",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)" }}
>
<div>
<Card >
  <Card.Content > 
    <Card.Description  >  <Button>
      <Image  src="/skills/node.png" alt="Logo 1" style={{ maxWidth: '15%', maxHeight: '10%', display:"flex", flexDirection: 'column',  justifyContent: 'center', alignItems: 'center', marginLeft:"6.5rem" }}/>
    Node</Button>
    </Card.Description>
  </Card.Content>
</Card>
</div>
<div>
<Card>
  <Card.Content>
    <Card.Description><Button>
      <Image src="/skills/express.png" alt="Logo 2" style={{ maxWidth: '15%', maxHeight: '5%', display:"flex", flexDirection: 'column',  justifyContent: 'center', alignItems: 'center', marginLeft:"6.5rem" }}/>
      Express</Button>
    </Card.Description>
  </Card.Content>
</Card>
</div>


</AutoplaySlider>
</Segment>

  </Card.Content>
</Card>
</Grid.Column>






<Grid.Column computer={8} mobile={16}>

<Card fluid className="animated-card" style={{ border: "none", padding: "0.5rem", marginTop:"1rem"}}>
  <Card.Content style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))', }}>
    <Card.Header>Languages</Card.Header>

    <Segment  style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))', border: "none", padding:"0rem" }}>

<AutoplaySlider

bullets={false}
organicArrows={false}
infinite={true}
mobileTouch={true}
virtualize={true}
play={true}
cancelOnInteraction={false} 
interval={5000}
style={{ width: '100%', height: '3.5rem', margin:"0rem", background: 'linear-gradient(rgba(229, 255, 0, 0.1), rgba(100, 100, 100, 0.1))', border: "none", padding:"0rem",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)" }}
>
<div >
<Card >
  <Card.Content > 
    <Card.Description  > <Button>
      <Image  src="/skills/js.png" alt="Logo 1" style={{ maxWidth: '15%', maxHeight: '10%', display:"flex", flexDirection: 'column',  justifyContent: 'center', alignItems: 'center', marginLeft:"6.2rem" }} />
     JavaScript</Button>
    </Card.Description>
  </Card.Content>
</Card>
</div>
<div>
<Card>
  <Card.Content>
    <Card.Description>  <Button>
      <Image src="/skills/python.png" alt="Logo 2" style={{ maxWidth: '15%', maxHeight: '10%', display:"flex", flexDirection: 'column',  justifyContent: 'center', alignItems: 'center', marginLeft:"6.2rem" }}/>
    Python</Button>
    </Card.Description>
  </Card.Content>
</Card>
</div>
<div>
<Card>
  <Card.Content>
    <Card.Description><Button>
      <Image src="/skills/js.png" alt="Logo 3" style={{ maxWidth: '15%', maxHeight: '10%', display:"flex", flexDirection: 'column',  justifyContent: 'center', alignItems: 'center', marginLeft:"6.2rem" }} />
     JavaScript</Button> 
    </Card.Description>
  </Card.Content>
</Card>
</div>


</AutoplaySlider>
</Segment>

  </Card.Content>
</Card>
</Grid.Column>

<Grid.Column computer={8} mobile={16}>

<Card fluid className="animated-card" style={{ border: "none", padding: "0.5rem", marginTop:"1rem"}}>
  <Card.Content style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))', }}>
    <Card.Header>Technologies</Card.Header>

    <Segment  style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))', border: "none", padding:"0rem" }}>

<AutoplaySlider

bullets={false}
organicArrows={false}
infinite={true}
mobileTouch={true}
virtualize={true}
play={true}
cancelOnInteraction={false} 
interval={5000}
style={{ width: '100%', height: '3.5em', margin:"0rem", background: 'linear-gradient(rgba(229, 255, 0, 0.1), rgba(100, 100, 100, 0.1))', border: "none", padding:"0rem",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)" }}
>
<div>
<Card >
  <Card.Content > 
    <Card.Description  ><Button>
      <Image  src="/skills/semantic.png" alt="Logo 1" style={{ maxWidth: '15%', maxHeight: '10%', display:"flex", flexDirection: 'column',  justifyContent: 'center', alignItems: 'center', marginLeft:"6.2rem" }} />
      React Semantic ui</Button>
    </Card.Description>
  </Card.Content>
</Card>
</div>
<div>
<Card>
  <Card.Content>
    <Card.Description><Button>
      <Image src="/skills/opencv.png" alt="Logo 2" style={{ maxWidth: '15%', maxHeight: '10%', display:"flex", flexDirection: 'column',  justifyContent: 'center', alignItems: 'center', marginLeft:"6.2rem" }} />
      OpenCV</Button>
    </Card.Description>
  </Card.Content>
</Card>
</div>
<div>
<Card>
  <Card.Content>
    <Card.Description> <Button>
      <Image src="/skills/three.png" alt="Logo 3" style={{ maxWidth: '15%', maxHeight: '10%', display:"flex", flexDirection: 'column',  justifyContent: 'center', alignItems: 'center', marginLeft:"6.2rem" }} />
     Three</Button>
    </Card.Description>
  </Card.Content>
</Card>
</div>

<div>
<Card>
  <Card.Content>
    <Card.Description> <Button>
      <Image src="/skills/tailwind.png" alt="Logo 3" style={{ maxWidth: '15%', maxHeight: '10%', display:"flex", flexDirection: 'column',  justifyContent: 'center', alignItems: 'center', marginLeft:"6.2rem" }} />
     Tailwind</Button>
    </Card.Description>
  </Card.Content>
</Card>
</div>

<div>
<Card>
  <Card.Content>
    <Card.Description> <Button>
      <Image src="/skills/npm.png" alt="Logo 3" style={{ maxWidth: '15%', maxHeight: '10%', display:"flex", flexDirection: 'column',  justifyContent: 'center', alignItems: 'center', marginLeft:"6.2rem" }} />
     NPM</Button>
    </Card.Description>
  </Card.Content>
</Card>
</div>

<div>
<Card>
  <Card.Content>
    <Card.Description> <Button>
      <Image src="/skills/git.png" alt="Logo 4" style={{ maxWidth: '15%', maxHeight: '10%', display:"flex", flexDirection: 'column',  justifyContent: 'center', alignItems: 'center', marginLeft:"6.2rem" }} />
     Git</Button>
    </Card.Description>
  </Card.Content>
</Card>
</div>

</AutoplaySlider>
</Segment>

  </Card.Content>
</Card>
</Grid.Column>

         
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default Skills;
