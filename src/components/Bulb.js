import React  from 'react'




 function Bulb(props) {

   console.log(props)

  const lampara = props.lampara
  return (
  <div>
    
     
      
      
      {lampara ?
        (<span>
          <img src={'https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Light_bulb.png'} alt="lampara apagada" width={50} />
        </span>) :
        (<span>
          <img src={'https://img.icons8.com/ios/1600/light-on.png'} alt="lamapara prendida"width={50} />
        </span>)}
        
        <h2>Hice {props.click} clicks en switch</h2>
  </div>
  )
  
  
}
export default Bulb;