import { useState, useEffect } from 'react';
import { Button, Card, Container } from 'semantic-ui-react';
import ContainerCenter from './components/ContainerCenter';
import Image3DViewer from './background/Image3DViewer';
import './App.css';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Loader3D from './components/Loader3D';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <Container className="app-container">
      {loading && <Loader3D />} 

      {!loading && (
        <Card fluid className='contenedorP' style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))',  }} >
          <Image3DViewer/>
     
          <ContainerCenter/>
          <Skills/>
          <Portfolio/>
   </Card>
      )}
    </Container>
  );
}

export default App;
