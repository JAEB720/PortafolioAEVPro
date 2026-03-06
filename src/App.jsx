import { useState, useEffect } from 'react';
import ContainerCenter from './components/ContainerCenter';
import Image3DViewer from './background/Image3DViewer';
import './App.css';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Loader3D from './components/Loader3D';
import DownloadCV from './components/DownloadCV';


function App() {
  const [isBackgroundReady, setIsBackgroundReady] = useState(false);
  const [backgroundProgress, setBackgroundProgress] = useState(0);

  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setIsBackgroundReady(true);
      setBackgroundProgress(100);
    }, 10000);

    return () => clearTimeout(safetyTimer);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
      <Image3DViewer
        onProgress={(value) => setBackgroundProgress(value)}
        onReady={() => setIsBackgroundReady(true)}
        onError={() => setIsBackgroundReady(true)}
      />

      {!isBackgroundReady && <Loader3D progress={backgroundProgress} />}

      {isBackgroundReady && (
        <div>
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
