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
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'auto' }}>
    
      {loading && <Loader3D />} 

      {!loading && (
       <div style={{ position: 'relative', zIndex: 1 }}>
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
