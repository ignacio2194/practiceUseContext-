import React from 'react'
import spainFlag from '../images/spain.jpg'
import ukFlag from '../images/uk.png'
import franceFlag from '../images/francia.png'
import { useContext } from 'react'
import { Contex } from '../context/Contex'
const Languages = () => {

  const {data,setData}= useContext(Contex)
  const sustitucion =(position)=>{
    setData(data.map((item,index)=>
    index===3?{...item,idioma:position}:{...item}
  ))
  }
  const cambio1 =()=>{
  sustitucion(0)
  }
  const cambio2 =()=>{
    sustitucion(1)
    }
    const cambio3 =()=>{
      sustitucion(2)
      }
  return (
    <div className='Languages'>
        <div className="bandera" onClick={cambio1}>
            <img src={spainFlag} alt="" />
        </div>
        <div className="bandera" onClick={cambio2}>
        <img src={ukFlag} alt="" />
        </div>
        <div className="bandera" onClick={cambio3}>
        <img src={franceFlag} alt="" />
        </div>
    </div>
  )
}

export default Languages