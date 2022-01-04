import Lamp from './components/Lamp'
import Bulb from './components/Bulb'

const App = () =>{
  let valor = 300
  let texto ="texto"
  return (
    <Lamp valor={valor} texto={texto}/>

  );
}

export default App;
