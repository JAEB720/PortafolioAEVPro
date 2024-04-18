// import Container from "postcss/lib/container";
import React, { useEffect, useState } from "react";
import { Loader, Progress, Card, Image, Container, Button } from 'semantic-ui-react';

// import "./Loader3D.css"; 


const Loader3D = () => {
  const [loading, setLoading] = useState(true); // Estado para controlar la visibilidad del loader
  const [progress, setProgress] = useState(0); // Estado para el progreso de la carga

  useEffect(() => {
    const simulateProgress = () => {
      const interval = setInterval(() => {
        // Incrementa el progresp en cada iteracion
        setProgress((prevProgress) => {
          if (prevProgress === 100) {
            // Si se llega al 100%, oculta el loader después de un breve retrasp
            setTimeout(() => {
              setLoading(false);
            }, 500);
            clearInterval(interval); // Detiene la simullación de progreso
            return 100;
          } else {
            return prevProgress + 1; // Incrementad el progreso en 10 unidades
          }
        });
      }, 200); // Intervalo de tiempo para simular la cargal
    };

    simulateProgress();

    return () => clearInterval(); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <Card fluid style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'linear-gradient(rgba(252, 252, 252, 1), rgba(252, 252, 252,1))', border: "none", padding: "0rem", marginTop: "0rem",  position: "absolute" }}>

    <Card fluid className={`loader-container ${loading ? '' : 'hide'}`} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'linear-gradient(rgba(252, 252, 252, 0.81), rgba(252, 252, 252, 0.91))', border: "none", padding: "0rem", marginTop: "0rem",  position: "absolute" }}>

    {/* <div className="custom-loader">
      <Loader active size='large'style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  }}/>
    </div> */}

    <Card fluid className="progress-bar" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'linear-gradient(rgba(252, 252, 252, 0.81), rgba(252, 252, 252, 0.91))', border: "none", padding: "0rem", marginTop: "0rem",   }}>
   

   
   
    <div className="image-container">
     
      <Image fluid src="/gif/FoxLoader2.gif" alt="#" size='medium'  style={{ background: 'linear-gradient(rgba(252, 252, 252, 0.81), rgba(252, 252, 252, 0.91))', border: "none", padding: "1rem", marginTop: "0rem", }}/>
    </div>
    <Button fluid style={{  background: 'linear-gradient(rgba(252, 252, 252, 0.81), rgba(252, 252, 252, 0.91))', border: "none", padding: "1rem", marginTop: "-6.5rem",  }} >
      <Progress  percent={progress} indicating  > 
      {progress}%
  </Progress>
      </Button></Card>
  </Card>
  </Card>
  
);
};

export default Loader3D;
