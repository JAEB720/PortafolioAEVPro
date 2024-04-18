import { useState, useEffect } from 'react';
import { Button, Card } from 'semantic-ui-react';
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
    }, 300000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="app-container">
      {loading && <Loader3D />} 

      {!loading && (
        <div className='contenedorP'>
          <Image3DViewer/>
          <ContainerCenter/>
          <Skills/>
          <Portfolio/>
        </div>
      )}
    </div>
  );
}

export default App;
