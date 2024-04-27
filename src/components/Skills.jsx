import React from 'react';
import { Container, Card, Grid, Image, Segment, Button } from 'semantic-ui-react';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { color } from 'three/examples/jsm/nodes/Nodes.js';
import { Color } from 'three';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Skills() {
  return (
    <Container style={{ background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(100, 100, 100, 0))', border: "none", padding: "0rem", }}>
      <Grid columns={2} divided stackable style={{ margin: "0rem" }}>
        <Grid.Row style={{ margin: '0rem' }}>
          <Grid.Column computer={8} mobile={16}>

            <Card fluid className="animated-car" style={{ border: "none", padding: "0.5rem",}}>
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
          style={{ width: '100%', height: '4rem', margin:"0rem", background: 'linear-gradient(rgba(229, 255, 0, 0.1), rgba(100, 100, 100, 0.1))', border: "none", padding:"0rem",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)" }}
        >
          <div>
            <Card  style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))', width:"47rem" }} >
              <Card.Content textAlign='center' > 
                <Card.Description  ><Button fluid style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))', display:"flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color:"white" }}>
                  <Image  src="/skills/html.png" alt="Logo 1" style={{ maxWidth: '6%', maxHeight: '10%',}} />
                  HTML</Button>
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))', width:"47rem" }}>
              <Card.Content>
                <Card.Description> <Button fluid style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))', display:"flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color:"white" }}>
                  <Image src="/skills/css.png" alt="Logo 2" style={{ maxWidth: '6%', maxHeight: '10%',}} />
                 CSS</Button>
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))',  width:"47rem"  }}>
              <Card.Content>
                <Card.Description>  <Button fluid style={{background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))',display:"flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color:"white" }}>
                  <Image src="/skills/js.png" alt="Logo 3" style={{ maxWidth: '6%', maxHeight: '10%', }}/>
                JavaScript</Button>
                </Card.Description>
              </Card.Content>
            </Card>
          </div>

          <div>
            <Card style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))',  width:"47rem"  }}>
              <Card.Content>
                <Card.Description> <Button fluid style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))', display:"flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color:"white" }}>
                  <Image src="/skills/react.png" alt="Logo 4" style={{ maxWidth: '6%', maxHeight: '10%',}} />
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

<Card fluid className="animated-car" style={{ border: "none", padding: "0.5rem", marginTop:"1rem"}}>
  <Card.Content style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))',   }}>
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
style={{ width: '100%', height: '4rem', margin:"0rem", background: 'linear-gradient(rgba(229, 255, 0, 0.1), rgba(100, 100, 100, 0.1))', border: "none", padding:"0rem",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)" }}
>
<div>
<Card style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))',  width:"47rem"  }} >
  <Card.Content > 
    <Card.Description  >  <Button fluid style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))', display:"flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color:"white" }}>
      <Image  src="/skills/node.png" alt="Logo 1" style={{ maxWidth: '6%', maxHeight: '10%',  }}/>
    Node</Button>
    </Card.Description>
  </Card.Content>
</Card>
</div>

<div>
<Card style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))',  width:"47rem"  }} >
  <Card.Content > 
    <Card.Description  >  <Button fluid style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))', display:"flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color:"white" }}>
      <Image  src="/skills/express.png" alt="Logo 1" style={{ maxWidth: '6%', maxHeight: '10%',  }}/>
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

<Card fluid className="animated-car" style={{ border: "none", padding: "0.5rem", marginTop:"1rem"}}>
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
style={{ width: '100%', height: '4rem', margin:"0rem", background: 'linear-gradient(rgba(229, 255, 0, 0.1), rgba(100, 100, 100, 0.1))', border: "none", padding:"0rem",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)" }}
>
<div >
<Card style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))',  width:"47rem"  }} >
  <Card.Content > 
    <Card.Description   > <Button fluid style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))', display:"flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color:"white" }}>
      <Image  src="/skills/js.png" alt="Logo 1" style={{ maxWidth: '6%', maxHeight: '10%',  }} />
     JavaScript</Button>
    </Card.Description>
  </Card.Content>
</Card>
</div>
<div>
<Card style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))',  width:"47rem"  }}>
  <Card.Content>
    <Card.Description>  <Button fluid style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))', display:"flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color:"white" }}>
      <Image src="/skills/python.png" alt="Logo 2" style={{ maxWidth: '6%', maxHeight: '10%', }}/>
    Python</Button>
    </Card.Description>
  </Card.Content>
</Card>
</div>
{/* <div>
<Card style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))', }}>
  <Card.Content>
    <Card.Description><Button fluid style={{ display:"flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
      <Image src="/skills/js.png" alt="Logo 3" style={{ maxWidth: '15%', maxHeight: '10%',  }} />
     JavaScript</Button> 
    </Card.Description>
  </Card.Content>
</Card>
</div> */}


</AutoplaySlider>
</Segment>

  </Card.Content>
</Card>
</Grid.Column>

<Grid.Column computer={8} mobile={16}>

<Card fluid className="animated-car" style={{ border: "none", padding: "0.5rem", marginTop:"1rem"}}>
  <Card.Content style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))',  }}>
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
style={{ width: '100%', height: '4rem', margin:"0rem", background: 'linear-gradient(rgba(229, 255, 0, 0.1), rgba(100, 100, 100, 0.1))', border: "none", padding:"0rem",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)" }}
>
<div>
<Card style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))',  width:"47rem"  }}>
  <Card.Content > 
    <Card.Description  ><Button fluid style={{background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))', display:"flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color:"white" }}>
      <Image  src="/skills/semantic.png" alt="Logo 1" style={{ maxWidth: '6%', maxHeight: '10%', }} />
      React Semantic ui</Button>
    </Card.Description>
  </Card.Content>
</Card>
</div>
<div>
<Card style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))',  width:"47rem"  }}>
  <Card.Content>
    <Card.Description><Button fluid style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))', display:"flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color:"white" }}>
      <Image src="/skills/opencv.png" alt="Logo 2" style={{ maxWidth: '6%', maxHeight: '10%',}} />
      OpenCV</Button>
    </Card.Description>
  </Card.Content>
</Card>
</div>
<div>
<Card style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))',  width:"47rem"  }}>
  <Card.Content>
    <Card.Description> <Button fluid style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))', display:"flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color:"white" }}>
      <Image src="/skills/three.png" alt="Logo 3" style={{ maxWidth: '6%', maxHeight: '10%', }} />
     Three</Button>
    </Card.Description>
  </Card.Content>
</Card>
</div>

<div>
<Card style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))',  width:"47rem" }}>
  <Card.Content>
    <Card.Description> <Button fluid style={{background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))',display:"flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color:"white" }}>
      <Image src="/skills/tailwind.png" alt="Logo 3" style={{ maxWidth: '6%', maxHeight: '10%',margin:"0.3rem"}} />
     Tailwind</Button>
    </Card.Description>
  </Card.Content>
</Card>
</div>

<div>
<Card style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))',  width:"47rem"  }}>
  <Card.Content>
    <Card.Description> <Button fluid style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))',display:"flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color:"white" }}>
      <Image src="/skills/npm.png" alt="Logo 3" style={{ maxWidth: '6%', maxHeight: '10%', margin:"0.3rem"}} />
     NPM</Button>
    </Card.Description>
  </Card.Content>
</Card>
</div>

<div>
<Card style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))',  width:"47rem"  }}>
  <Card.Content>
    <Card.Description> <Button fluid style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))', display:"flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color:"white" }}>
      <Image src="/skills/git.png" alt="Logo 4" style={{ maxWidth: '6%', maxHeight: '10%',margin:"0.2rem" }} />
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
