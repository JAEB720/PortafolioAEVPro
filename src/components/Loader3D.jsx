// import Container from "postcss/lib/container";
import React from "react";
import { Progress, Card, Image, Button } from 'semantic-ui-react';

// import "./Loader3D.css"; 


const Loader3D = ({ progress = 0 }) => {

  return (
    <Card fluid style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', 
     background: 'linear-gradient(rgba(252, 252, 252, 1), rgba(252, 252, 252,1))', border: "none", padding: "0rem",   position: "absolute" }}>

    <Card fluid className="loader-container" 
    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  
    background: 'linear-gradient(rgba(252, 252, 252, 0.81), rgba(252, 252, 252, 0.91))', border: "none", padding: "0rem", margin: "0rem",  position: "absolute" }}>

    {/* <div className="custom-loader">
      <Loader active size='large'style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  }}/>
    </div> */}

    <Card fluid className="progress-bar" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', 
       background: 'linear-gradient(rgba(252, 252, 252, 0.81), rgba(252, 252, 252, 0.91))', border: "none", padding: "0rem", marginTop: "0rem",   }}>
   

   
   
    <div className="image-container">
     
      <Image fluid src="/gif/FoxLoader2.gif" alt="#" size='medium'  
      style={{ background: 'linear-gradient(rgba(252, 252, 252, 0.81), rgba(252, 252, 252, 0.91))', border: "none", marginTop: "0rem", }}/>
    </div>
    <Button style={{  background: 'linear-gradient(rgba(252, 252, 252, 0.81), rgba(252, 252, 252, 0.91))', border: "none",   }} >
      <Progress  percent={progress} indicating  > 
      {progress}%
  </Progress>
      </Button></Card>
  </Card>
  </Card>
  
);
};

export default Loader3D;
