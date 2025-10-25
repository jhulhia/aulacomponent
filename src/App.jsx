import { useState } from 'react'
import './App.css'
import FirstComponent from './Componentes/FirstComponet'
import SecondComponent from './Componentes/FirstComponet 2'
import Mycomponet from './Componentes/Mycomponet'
import Events from './Componentes/Events' 

function App() {

  return (
    <div className="App">
    <FirstComponent />
    <SecondComponent />
    <Mycomponet />
     <Events />
    
    </div>
    
    );
};

export default App
