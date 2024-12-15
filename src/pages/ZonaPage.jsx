import React from 'react'
import Zona1 from '../Component/Zona1/Zona1'
import ZonaStart from '../Component/ZonaStart/ZonaStart'
import Camp from '../Component/Camp/Camp'
import Ps5 from '../Component/Ps5/Ps5'

const Zona = () => {
  return (
  <>
  
  <Zona1 text={"СТАНДАРТ"} color={"pink"}/>
    <ZonaStart text={"СТАНДАРТ+"} color={"blue"} />
    <Camp text={"BOOT CAMP"} color={"red"}/>
 
    <Ps5 text={"Ps5"} color={"sin"}/>
   

  
  
  
  
  </>
  )
}

export default Zona