import React from 'react' //IMPORTO PAQUETES DE REACT
import Lamp from './components/Lamp' //IMPORTO COMPONENTE Lamp
import "./App.css"
import NavBar from './components/NavBar'
import CardDinamic from './components/Card'
import Carrousel from './components/Carrousel'


 const App = () => { //CREO COMPONENTE FUNCIONAL APP
  


   return(
    <div className="App">
     <NavBar/>
     <h1>Generacion de Carrousel</h1>
    <Carrousel/>
     <h1>Generacion de Cards</h1>
     <CardDinamic/>
    {/*<Lamp />*/}
   
    </div>
  );
   }

   export default App;
