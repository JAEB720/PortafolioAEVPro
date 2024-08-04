import React from 'react';
import { Container, Image } from 'semantic-ui-react';

const Aboutme = () => {
  return (
    <Container 
      fluid
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        padding: '1rem 1rem',
        color: '#ffffff',
        textAlign: 'center'
      }}
    >
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
        Próximamente, comenzaré mis estudios universitarios en ingeniería de software,
        lo que me permitirá seguir expandiendo mis conocimientos y habilidades.<br /><br />

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
