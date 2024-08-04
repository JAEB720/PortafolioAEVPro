import { useState, useEffect } from 'react';
import { Button, Card } from 'semantic-ui-react';
import ContainerCenter from './components/ContainerCenter';
import Image3DViewer from './background/Image3DViewer';
import './App.css';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Loader3D from './components/Loader3D';
import DownloadCV from './components/DownloadCV';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div style={{ position: 'fixed', top: "1rem", left: 0, width: '103%', height: '100%', overflow: 'auto' }}>
    
      {loading && <Loader3D />} 

      {!loading && (
       <div style={{ position: 'relative', zIndex: 1 }}>
          <Image3DViewer/>
          <ContainerCenter/>
         
          <Skills/>
         
          <Portfolio/>
    
          <DownloadCV/>
         
        </div>
      )}
    </div>
  );
}

export default App;
