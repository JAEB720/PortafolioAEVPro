
import React, { useRef, useState } from 'react';
import { Container, Image, Card, Button } from 'semantic-ui-react';

const Aboutme = () => {


  const handleRedirect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer'); 
  };

  return (
    <Container 
      fluid
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        padding: '2.5rem 0rem',
        color: '#ffffff',
        textAlign: 'center',
        
      }}
    >

<Card centered size='mini'  style={{  background: 'white', border: "solid Skyblue 1px",
         color: "#ADCCEA", borderRadius: "25px", boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.9)",   overflow: 'hidden'  }}>
      <Image  src='AE720.png' wrapped ui={false} style={{ borderRadius: "25px",  }} />
     </Card>



      <h2 style={{ 
        fontSize: '2rem', 
        
        marginTop: '2rem' 
      }}>Acerca de mí</h2>
      
      <h4 style={{ 
        fontSize: '1rem', 
        lineHeight: '1.5', 
    
      }}>
        
        Soy un apasionado del desarrollo tecnológico. Mi trayecto en la programación comenzó en el desarrollo web,
        lo cual me ha llevado en un corto y largo camino hasta proyectos de visión artificial,
        tecnología de la cual estoy fascinado. La he usado para la detección de objetos y procesamiento de video.
        He trabajado con datasets y también he creado los míos.<br /><br />

        Soy autodidacta y curioso, amante de la ciencia y el chocolate. Me considero flojo,
        pero esto se ha convertido en una virtud, ya que siempre busco maneras de facilitar
        mi trabajo y evitar cometer errores. Amo aprender y disfruto conviviendo con otras
        personas, lo cual me ayuda a crecer tanto personal como profesionalmente.<br /><br />

        Soy multifacético, capaz de adaptarme a diferentes roles y situaciones.
        Por ello, sigo preparandome y especializadome en diferentes areas de la tecnología,
        lo que me permitirá seguir expandiendo mis conocimientos y habilidades.<br /><br />

 <h3  >Educación</h3>
        

<div style={{ marginTop:"0.5rem", display: 'flex', gap: '40px', marginBottom: '10px',  display: 'flex', alignItems: 'center', justifyContent: 'center', }} >

<div style={{ textAlign: 'center',  }}>
      <Button size='big'  circular color='white' 
  onClick={() => handleRedirect('https://www.academlo.com/')} 
  
  style={{ 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
    width: '50px', 
    height: '50px', 
    overflow: 'hidden' ,
      margin: '0 auto 5px auto'
  }}
>
  <Image src='a.png' ui={true} 
    style={{ 
      width: 'auto',
      height: '60%', 
      maxWidth: '60%',
      objectFit: 'contain' 
    }} 
  />
</Button>
<p style={{ fontSize: '0.7rem', color: '#F9844A', margin: '0' }}>Desarrolo Web <br />Full stack</p>
</div>


<div>
<Button size='big' circular color='white' 
  onClick={() => handleRedirect('https://uveg.edu.mx/index.php/es/')}
  style={{ 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
    width: '50px', 
    height: '50px', 
    overflow: 'hidden',
      margin: '0 auto 5px auto'
  }}
>
  <Image  src='uveg.png'  ui={true} 
    style={{ 
      width: 'auto',
      height: '60%', 
      maxWidth: '60%',
      objectFit: 'contain' 
    }} 
  />
        </Button>
        <p style={{ fontSize: '0.7rem', color: '#68A9E0', margin: '0' }}>Universidad <br /> Ing. de Software</p>
      </div>

</div> 

<div style={{ margin:"0.5rem" }} >
     
     <Button size='big'  circular color='white'  onClick={() => handleRedirect('https://academia.tinoreste.com/')}>
<Image  centered  src='tin.png' wrapped ui={true} style={{ width: '150px', height: '25px', borderRadius: '50%' }} />
         </Button>
         <p style={{ fontSize: '0.7rem', color: '#7AE582', margin: '0' }}>Tecnología 4.0</p>
             </div> 
<br />


      

        "Los sueños son solo mentiras que algún día dejarán de serlo."<br /><br />

        Me esfuerzo por combinar mi pasión por la tecnología
        con mi deseo de tener un impacto positivo en el mundo.
        Espero que disfrutes navegando por mi página y
        conociendo más sobre mi trabajo, y que me des la
        oportunidad de demostrar mi capacidad.<br /><br />

        Te prometo que cada cierto tiempo subire algo nuevo<br /><br />

        Hasta entonces....
      </h4>
    
      <Image size='big' src='/gif/zorrofN.gif'  />
    </Container>
  );
};

export default Aboutme;
