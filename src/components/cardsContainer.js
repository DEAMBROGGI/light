import React from 'react'
import CardStatic from './cardestatica'

export default function CardContainer(){

return (
<div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
<CardStatic/>
<CardStatic/>
<CardStatic/>
<CardStatic/>
<CardStatic/>
<CardStatic/>
</div>
)

}