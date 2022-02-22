import React, {useEffect, useState} from 'react' //IMPORTO PAQUETES DE REACT
import Lamp from './components/Lamp' //IMPORTO COMPONENTE Lamp
import "./App.css"
import NavBar from './components/NavBar'
import CardDinamic from './components/Card'
import Carrousel from './components/Carrousel'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CardDetalle from './components/detalle'
import Gallery from './components/carrouceldos'
import BadClock from './components/BadClock'
import GoodClock from './components/Goodclock'
import DerivedState from './components/getDerivedStateFromProps'
import ApiCall from './components/apiCall'
import axios from 'axios'
import CardContainer from './components/cardsContainer'


 const App = () => { //CREO COMPONENTE FUNCIONAL APP
  
const [input,setInput]=useState()
const [apidata, setApiData ]= useState([])


console.log(input)

useEffect(()=>{

axios.get(`https://rickandmortyapi.com/api/character/?page=1`)
  .then(response=>setApiData(response))

},[]) 
console.log(apidata)

   return(
    
    <BrowserRouter>
    <div className="App">
     <NavBar/>
     <div>
       <input onKeyUp={(event)=>setInput(event.target.value)}></input>
     </div>
     <Routes>
     
    <Route path="/carrousel" element={<Carrousel/>}/> 
    <Route path='/cards' element={<CardDinamic/>}/>
    <Route path="/lamp" element={<Lamp/>}/>
    <Route path="*" element={<Carrousel/>}/>
    <Route path ="/cards/detalle/:id" element={<CardDetalle/>}/>
    <Route path ="/gallery" element={<Gallery/>}/>
    <Route path ="/badclock" element={<BadClock/>}/>
    <Route path ="/goodclock" element={<GoodClock/>}/>
    <Route path ="/derivedstate" element={<DerivedState name={input}/>}/>
    <Route path ="/apisearch" element={<ApiCall search={input} apiInitial ={apidata}/>}/>
    <Route path ="/cardsestaticas" element={<CardContainer />}/>
    </Routes>
    </div>
    
    </BrowserRouter>
    
  );
   }

   export default App;
