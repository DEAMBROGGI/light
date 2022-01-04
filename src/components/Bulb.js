import React from 'react'

export default function Bulb({ lampara,test,props }) {
  
  return (
  <div>
    <h1>{valor}</h1>
    <h1>{test}</h1>
      {lampara ?
        (<span>
          <img src={'https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Light_bulb.png'} width={50} />
        </span>) :
        (<span>
          <img src={'https://img.icons8.com/ios/1600/light-on.png'} width={50} />
        </span>)}
  </div>
  )
  
  
}