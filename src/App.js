import Lamp from './components/Lamp'
import Bulb from './components/Bulb'
import Texto from './components/Texto'

const App = () =>{
  let valor = 300
  let texto ="texto"
  return (
    <>
    <Texto valor={valor} texto={texto}/>
    <Lamp />
    
    </>
  );
}

export default App;
