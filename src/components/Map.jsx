import React, { useState } from "react"
import { Map, Marker } from "pigeon-maps"

const  MyMap=({location})=> {
  const [hue, setHue] = useState(0)
  const color = `hsl(${hue % 360}deg 39% 70%)`

  return (
    <Map height={300} defaultCenter={location} defaultZoom={17}>
      <Marker 
        width={50}
        anchor={location} 
        color={color} 
        onClick={() => setHue(hue + 20)} 
      />
      
    </Map>
  )
}
export default MyMap;