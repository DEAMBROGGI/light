import React from 'react'
import Lamp from './components/Lamp'
import Bulb from './components/Bulb'
import Texto from './components/Texto'

const App = () =>{
  const [valor,setValor] = React.useState(300)

  const addValor=()=>{

    setValor(valor+1)

  }

  
  let texto ="texto"
  return (
    <>
    <Texto valor={valor} texto={texto}/>
    <Lamp />
    <button onClick={addValor}>AGREGAR VALOR</button>
    <button onClick={()=>setValor(valor-1)}>RESTAR VALOR</button>
    </>
  );
}

export default App;
