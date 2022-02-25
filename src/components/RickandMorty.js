import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ApiCall(props) {
  
    
    const [data, setData] = useState()
    console.log(data)

    useEffect(()=>{

        axios.get(`https://rickandmortyapi.com/api/character/?page=1`)
          .then(response=>setData(response.data.results))
        
        },[]) 

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/?name=${props.search}`)
            .then(response => setData(response.data.results))
        console.log(data)
    },[props.search])

    return (
        <div>
            <h1>FROM API SEARCH</h1>
            <div style={{display:'flex', flexDirection:'row', flexWrap:"wrap"}}>
            {data?.map(datos =>
                <div >
                    <div ><img src={datos.image} alt={datos.name}/></div>
                    <div>{datos.name}</div>
                </div>
            )}
            </div>
        </div>
    )
}