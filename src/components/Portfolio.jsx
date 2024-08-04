import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


const AutoplaySlider = withAutoplay(AwesomeSlider);

const Portfolio = () => {
  const sliderStyle = {
    background: 'black',
  };

  const slideContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    padding: '0rem',
    backgroundColor: '#ffffff',
  };

  const slideImageStyle = {
    padding: '0.5rem',
    maxWidth: '90%',
    maxHeight: '90%',
    backgroundColor: 'white',
  };

  return (
    <div>
   <h2 style={{textAlign: "center",margin: "2rem"}}>Portafolio</h2>


    <Container style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))', border: "none",  
    boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.8)'  }}>
      
      <AutoplaySlider
      organicArrows={false}
        play={true}
        cancelOnInteraction={false} 
        interval={3000} 
        bullets={false} 
    
        className="portfolio-slider"
        style={sliderStyle}
      >
        <div className="slide-item" onClick={() => window.open('https://ae-sunshine3d.netlify.app/', '_blank')}>
          <div style={slideContentStyle}>
            <Image src="/portafolio/ApiClima.png" alt="Modelo 3D de automovil" style={slideImageStyle} />
            <h3>Modelo 3D de automovil</h3>
           
          </div>
        </div>
        <div className="slide-item" onClick={() => window.open('https://example.com/ecommerce', '_blank')}>
          <div style={slideContentStyle}>
            <Image src="/portafolio/ApiClima.png" alt="E-comerce" style={slideImageStyle} />
            <h3>E-comerce</h3>
            
          </div>
        </div>
        <div className="slide-item" onClick={() => window.open('https://clima-api-ae.netlify.app/', '_blank')}>
          <div style={slideContentStyle}>
            <Image src="/portafolio/ApiClima.png" alt="Crud con login de reconocimiento facial" style={slideImageStyle} />
            <h3>App Clima</h3>
            
          </div>
        </div>
        <div className="slide-item" onClick={() => window.open('https://example.com/deteccion', '_blank')}>
          <div style={slideContentStyle}>
            <Image src="/portafolio/ApiClima.png" alt="Detección de objetos" style={slideImageStyle} />
            <h3>Detección de objetos</h3>
            
          </div>
        </div>
      </AutoplaySlider>
    </Container></div>
  );
};

export default Portfolio;
