import React,{useContext} from 'react'
import { Contex } from '../context/Contex'

const Teacher = () => {
  const {data} = useContext(Contex)
  const idioma =data[3].idioma
  const image =`../images/${data[idioma].foto}`
  console.log(data)
  return (
    <div className='teacher'>
        <h1>{data[idioma].boton1}</h1>
        <div className="foto">
            <img  className ="imagen" src={image} alt="" />
        </div>
        <div className="name">
          {data[idioma].nombre}
        </div>
    </div>
  )
}

export default Teacher