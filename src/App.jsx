import { useState } from 'react'
import {  Button, Card, } from 'semantic-ui-react';

// import Direccion from './components/Direccion';
import AcercaDeMi from './components/AcercaDeMi';
// import Section from './components/Section';
// import Portafolio from './components/Portfolio';
// import Contact from './components/Contact'
import Image3DViewer from './background/Image3DViewer';
import './App.css'
import Portfolio from './components/Portfolio';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='contenedorP'>
   <Image3DViewer/>
{/* <Direccion/> */}
<AcercaDeMi/>
{/* <Section/> */}
<Portfolio/>
{/* <Contact/> */}

 

  
  


      </div>
    
    </>
  )
}

export default App

