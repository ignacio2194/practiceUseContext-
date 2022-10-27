import React from 'react'
import { useContext } from 'react'
import { Contex } from '../context/Contex'
const Location = () => {
  const {data} = useContext(Contex)
  const idioma = data[3].idioma
  return (
    <div className='ubication'>
        <h1>ubicacion:</h1>
        <div className="text">
         {data[idioma].direccion}
        </div>
    </div>
  )
}

export default Location