import React, { useState } from 'react'
import casa from '../img/casa.svg'
import logo from '../img/logo.svg'

function OtrasOperaciones(props) {
    const [bulbN, setBulbN] = useState("va a cambiar por un numero al hacer click en el boton")

    return (
        <div>
            <h1>Otras operaciones pasando props</h1>
            <h3>El numero que envia lamp desde sus props es {props.number}</h3>
            <h2>{bulbN}</h2>
            <button onClick={() => setBulbN(20)}>CAMBIO BULBN</button>
            <h1>Importacion de imagenes desde carpeta src</h1>
            <span>
                <img src={casa} alt="casa" width={50} />
            </span>
            <span>
                <img src={logo} alt="casa" width={50} />
            </span>

        </div>
    )
}

export default OtrasOperaciones;