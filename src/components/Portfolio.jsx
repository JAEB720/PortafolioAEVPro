
// import { Carousel, Modal } from 'react-bootstrap';
// import ApiClima from './ProyectosPortafolio/ApiClima'; 
// import BuscadorIDS from './ProyectosPortafolio/BuscadorIDS';
// import CAR3D from './ProyectosPortafolio/CAR3D';
// import EcomerPrimera from './ProyectosPortafolio/EcomerPrimera';
// import GalletaFortuna from './ProyectosPortafolio/GalletaFortua';
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import { Container, Card, Grid, Image, CardContent, CardHeader, CardMeta, CardDescription, Icon, Segment } from 'semantic-ui-react';

import 'react-awesome-slider/dist/styles.css';

// import './Portafolio.css';

const Portfolio = () => {
  return (
    <Container   style={{ background: 'linear-gradient(rgba(229, 255, 0, 0.1), rgba(100, 100, 100, 0.1))',  }}>
      <Segment style={{ background: 'linear-gradient(rgba(229, 255, 0, 0.1), rgba(100, 100, 100, 0.1))', border: "none", padding:"0.5rem"  }} >
      <AwesomeSlider
      className="vertical-slider"
      organicArrows={false}
      infinite={true}
      mobileTouch={true}
      virtualize={true}
      bullets={false}
      vertical={true}
      style={{ width: "100%", height: "400px" }}
    >
      <div>
        <Card>
          <Card.Content>
            <Card.Header>Imagen 1
            <Image src="/portafolio/GalletaF.png" alt="Logo 3" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Card.Header>
            <Card.Meta>Descripción de la Imagen 1</Card.Meta>
          </Card.Content>
        </Card>
      </div>
      <div>
        <Card>
          <Card.Content>
            <Card.Header>Imagen 2
            <Image src="/portafolio/ApiClima.png" alt="Logo 3" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Card.Header>
            <Card.Meta>Descripción de la Imagen 2</Card.Meta>
          </Card.Content>
        </Card>
      </div>
      <div>
        <Card>
          <Card.Content>
            <Card.Header>Imagen 3
            <Image src="/portafolio/CrudUser.png" alt="Logo 3" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Card.Header>
            <Card.Meta>Descripción de la Imagen 3</Card.Meta>
          </Card.Content>
        </Card>
      </div>

      <div>
        <Card>
          <Card.Content>
            <Card.Header>Imagen 4
            <Image src="/portafolio/PokedexC.png" alt="Logo 4" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            <Image src="/portafolio/PokedexP.png" alt="Logo 4" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            
            </Card.Header>
            <Card.Meta>Descripción de la Imagen 3</Card.Meta>
          </Card.Content>
        </Card>
      </div>
    </AwesomeSlider>
    </Segment>
</Container>
  );
};

export default Portfolio;

