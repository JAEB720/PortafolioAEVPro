import React from 'react';
import { Container, Button, Icon } from 'semantic-ui-react';

const DownloadCV = () => {
  const handleDownload = () => {

    window.location.href = 'public/docs/CV Alejandro Escobar.pdf';
  };

  return (
    <div>
         <h2 style={{textAlign: "center",marginTop: "5rem"}}>Curriculum</h2>
    <Container textAlign="center" style={{ margin: '2em' }}>
      <Button color="blue" onClick={handleDownload}>
        <Icon name="download" />
        Descargar CV
      </Button>
    </Container>
    </div>
  );
};

export default DownloadCV;
