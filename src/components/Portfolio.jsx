import React from 'react';
import { Container, Card, Grid, Image } from 'semantic-ui-react';


const Portfolio = () => {
  return (
    <Container style={{ background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(100, 100, 100, 0))', border: "none", padding: "0rem", }}>
      <Grid columns={2} divided stackable style={{ margin: "0.5rem"  }}>
        <Grid.Row style={{ margin: '1rem' }}>
          <Grid.Column computer={8} mobile={16}>
            <Card fluid className="animated-card" style={{ border: "none", padding: "0.5rem",}}>
              <Card.Content>
                <Card.Header>Modelo 3D de automovil</Card.Header>
                <Image src="/portafolio/ApiClima.png" alt="Logo 1" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                <Card.Meta>seleccion de daños en un automovil 3D</Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column computer={8} mobile={16}>
            <Card fluid className="animated-card" style={{ border: "none", padding: "0.5rem",  }}>
              <Card.Content>
                <Card.Header>E-comerce</Card.Header>
                <Image src="/portafolio/ApiClima.png" alt="Logo 2" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                <Card.Meta>compra de productos "Front end y back end"</Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ marginBottom: '20px' }}>
          <Grid.Column computer={8} mobile={16}>
            <Card fluid className="animated-card" style={{ border: "none", padding: "0.5rem", }}>
              <Card.Content>
                <Card.Header>CrudUser</Card.Header>
                <Image src="/portafolio/CrudUser.png" alt="Logo 3" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                <Card.Meta>login con reconocimiento facial para un crud de usuarios "front end y back end" </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column computer={8} mobile={16}>
            <Card fluid className="animated-card" style={{ border: "none", padding: "0.5rem",  }}>
              <Card.Content>
                <Card.Header>reconocimiento de objetos</Card.Header>
                <Image src="/portafolio/CrudUser.png" alt="Logo 4" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                <Card.Meta>reconocimiento de objetos y personas atravez de la camara</Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Portfolio;
