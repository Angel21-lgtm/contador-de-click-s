import './App.css';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import Botton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClick = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(numClics - numClics);
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className='freecodecamp-logo' 
          src={freeCodeCampLogo} 
          alt="Logo de freeCodeCamp" />
      </div>
      <Contador numClics={numClics} />
      <div className="contenedor-principal">
        <Botton texto="Click" esBotonDeClick={true} manejarClick={manejarClick} />
        <Botton texto="Reiniciar" esBotonDeClick={false} manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
