import React from 'react'
import Bulb from './Bulb'
import "../style/lamp.css"
import OtrasOperaciones  from './otroComponente'

export default class Lamp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isTurnedOn : false,
      click: 0,
      number: 1000,
      apidata:[]
    }

  }

  cambiarLight = () => {
    this.setState({
      isTurnedOn : !this.state.isTurnedOn,
      click:this.state.click+1
         
    })

  }

  render() {
    return (
    
      <div>
       <h1>Operaciones de lamp</h1>
        <Bulb lampara={this.state.isTurnedOn} click={this.state.click} />
        <p className="title">The lamp is <b>{this.state.isTurnedOn ? 'on' : 'off'}</b></p>
        <button onClick={this.cambiarLight}>switch</button>
        <OtrasOperaciones number={this.state.number}/>
      </div>
     
    )
  }
}