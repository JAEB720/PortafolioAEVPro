import React, { useRef, useState } from 'react';
import { Card, Image, Segment, Button, Header, Menu, MenuItem, Container, Sidebar } from 'semantic-ui-react';


const Aboutme = () => {


  return (
    <Container fluid > 
        <Segment style={{ background: 'black', border: "solid 3px" , color:"#ADCCEA" , borderRadius:"25px", overflow:"hidden", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)", marginTop:"3rem" }}  >
        <Card centered fluid  className="acerca">
          <h2>Acerca de mi</h2>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum alias<br />
            delectus quaerat at quod sit. Iusto harum repellendus cupiditate. Id velit architecto <br />
            repellendus illo repudiandae dolor voluptates tenetur nemo aperiam quidem tempora <br />
            praesentium ipsa maiores illum, minima quia dolorem, laudantium,<br />
            libero eius? Excepturi culpa porro possimus voluptatem.
          </p>
        </Card>
      

    </Segment>

    <Image size='big' src='/zorrofN.gif' />
    </Container>
  );
};

export default Aboutme;
