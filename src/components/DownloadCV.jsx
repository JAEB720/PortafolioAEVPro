import React from 'react';
import { Container, Button, Icon } from 'semantic-ui-react';

const DownloadCV = () => {
  const handleDownload = () => {

    window.location.href = 'https://drive.google.com/file/d/1rA4mzZneoW4Y0EYMl8XI1IkCJe3k_pDq/view?usp=drive_link';
  };

  return (
    <div  >
         <h2 style={{textAlign: "center",marginTop: "5rem"}}>Curriculum</h2>
    <Container textAlign="center" style={{ margin: '2rem' }}>
      <Button color="blue" onClick={handleDownload}>
        <Icon name="download" />
        Descargar CV
      </Button>
    </Container>
    </div>
  );
};

export default DownloadCV;
