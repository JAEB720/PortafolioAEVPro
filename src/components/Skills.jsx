import React from 'react';
import { Container, Button, Image } from 'semantic-ui-react';


function Skills() {
  const buttonStyle = {
    background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))',
    color: "white",
    width: '6rem',
    height: '6rem',
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0.2rem',
    textAlign: 'center',
    padding: '0.5rem' 
  };

  const containerStyle = {
    background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(100, 100, 100, 0))',
    border: "none",
    padding: "0rem"
  };

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  return (
    <div>
        <h2 style={{ textAlign: "center",margin: "2rem"}}>Tecnologias</h2>

    <Container style={containerStyle}>
      <div style={gridStyle}>

      <Button circular style={buttonStyle}>
          <Image src="/skills/visualStudio.png" alt="Visual SC Logo" style={{ maxWidth: '50%', marginBottom: '0.5rem' }} />
         Visual Studio
        </Button>
        <Button circular style={buttonStyle}>
          <Image src="/skills/html.png" alt="HTML Logo" style={{ maxWidth: '50%', marginBottom: '0.5rem' }} />
          HTML
        </Button>
        <Button circular style={buttonStyle}>
          <Image src="/skills/css.png" alt="CSS Logo" style={{ maxWidth: '50%', marginBottom: '0.5rem' }} />
          CSS
        </Button>
        <Button circular style={buttonStyle}>
          <Image src="/skills/js.png" alt="JavaScript Logo" style={{ maxWidth: '50%', marginBottom: '0.5rem' }} />
          JavaScript
        </Button>
        <Button circular style={buttonStyle}>
          <Image src="/skills/react.png" alt="React Logo" style={{ maxWidth: '50%', marginBottom: '0.5rem' }} />
          React
        </Button>
        <Button circular style={buttonStyle}>
          <Image src="/skills/semantic.png" alt="Semantic Logo" style={{ maxWidth: '50%', marginBottom: '0.1rem' }} />
          React Semantic
        </Button>
        <Button circular style={buttonStyle}>
          <Image src="/skills/three.png" alt="Semantic Logo" style={{ maxWidth: '50%', marginBottom: '0.1rem' }} />
          Three
        </Button>
        <Button circular style={buttonStyle}>
          <Image src="/skills/node.png" alt="Node Logo" style={{ maxWidth: '50%', marginBottom: '0.5rem' }} />
          Node
        </Button>
        <Button circular style={buttonStyle}>
          <Image src="/skills/express.png" alt="Express Logo" style={{ maxWidth: '50%', marginBottom: '0.5rem' }} />
          Express
        </Button>
        <Button circular style={buttonStyle}>
          <Image src="/skills/python.png" alt="Python Logo" style={{ maxWidth: '50%', marginBottom: '0.5rem' }} />
          Python
        </Button>
        <Button circular style={buttonStyle}>
          <Image src="/skills/git.png" alt="Git Logo" style={{ maxWidth: '50%', marginBottom: '0.5rem' }} />
          Git
        </Button>
        <Button circular style={buttonStyle}>
          <Image src="/skills/Android.png" alt="Android Logo" style={{ maxWidth: '55%', marginBottom: '0.5rem' }} />
         Android Studio
        </Button>
        <Button circular style={buttonStyle}>
          <Image src="/skills/Kotlin.png" alt="Kotlin Logo" style={{ maxWidth: '50%', marginBottom: '0.5rem' }} />
          Kotlin
        </Button>
        <Button circular style={buttonStyle}>
          <Image src="/skills/anaconda.png" alt="Anaconda Logo" style={{ maxWidth: '50%', marginBottom: '0.1rem' }} />
          Anaconda 
        </Button>
        <Button circular style={buttonStyle}>
          <Image src="/skills/Spyder.png" alt="Spyder Logo" style={{ maxWidth: '80%', marginBottom: '0.1rem' }} />
          Spyder
        </Button>
        <Button circular style={buttonStyle}>
          <Image src="/skills/numpy.png" alt="NumpyLogo" style={{ maxWidth: '50%', marginBottom: '0.5rem' }} />
          Numpy
        </Button>
        <Button circular style={buttonStyle}>
          <Image src="/skills/opencv.png" alt="Opencv Logo" style={{ maxWidth: '50%', marginBottom: '0.5rem' }} />
          Open CV
        </Button>
        <Button circular style={buttonStyle}>
          <Image src="/skills/pytorch.png" alt="Pytorch Logo" style={{ maxWidth: '50%', marginBottom: '0.5rem' }} />
          PyTorch
        </Button>
        <Button circular style={buttonStyle}>
          <Image src="/skills/YOLOv8.png" alt="Yolov8 Logo" style={{ maxWidth: '100%', marginBottom: '0.5rem' }} />
          YOLOv8
        </Button>
      </div>
    </Container>
    </div>
  );
}

export default Skills;
