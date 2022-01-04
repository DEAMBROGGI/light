import React from 'react'
import Lamp from './components/Lamp'
import Bulb from './components/Bulb'
import Texto from './components/Texto'

const App = () =>{
  const [valor,setValor] = React.useState(300)
  const [texto, setTexto] = React.useState('')
  
  const addValor=()=>{

    setValor(valor+1)

  }

  console.log(texto)
  
  return (
    <>
    <Texto valor={valor} texto={texto}/>
    <Lamp />
    <button onClick={addValor}>AGREGAR VALOR</button>
    <button onClick={()=>setValor(valor-1)}>RESTAR VALOR</button>
    <input onChange={e=>setTexto(e.target.value)} ></input>
    </>
  );
}

export default App;
