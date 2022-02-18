import React from 'react' //IMPORTO PAQUETES DE REACT
import Lamp from './components/Lamp' //IMPORTO COMPONENTE Lamp
import "./App.css"
import NavBar from './components/NavBar'
import CardDinamic from './components/Card'
import Carrousel from './components/Carrousel'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CardDetalle from './components/detalle'
import Gallery from './components/carrouceldos'


 const App = () => { //CREO COMPONENTE FUNCIONAL APP
  


   return(
    
    <BrowserRouter>
    <div className="App">
     <NavBar/>
     <Routes>
     
    <Route path="/carrousel" element={<Carrousel/>}/> 
    <Route path='/cards' element={<CardDinamic/>}/>
    <Route path="/lamp" element={<Lamp/>}/>
    <Route path="*" element={<Carrousel/>}/>
    <Route path ="/cards/detalle/:id" element={<CardDetalle/>}/>
    <Route path ="/gallery" element={<Gallery/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    
  );
   }

   export default App;
