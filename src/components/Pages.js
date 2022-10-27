import React,{useContext,useState} from 'react'
import Teacher from './Teacher'
import Location from './Location'
import { Contex } from '../context/Contex'
const Pages = () => {
    const {data}= useContext(Contex)
    const idioma= data[3].idioma
    const [hidden1, setHidden1] = useState(false)
    const [hidden2, setHidden2] = useState(false)
  const showme1=()=>{
    setHidden1(!hidden1)
    setHidden2(false)
  }
  const showme2 =()=>{
    setHidden2(!hidden2)
    setHidden1(false)
  }
  return (
    <>
    <h1>{data[idioma].titulo}</h1>
    <h2>{data[idioma].texto}</h2>
    <div className='buttons'>
        <button onClick={showme1}>{data[idioma].boton1}</button>
        <button onClick={showme2}>{data[idioma].boton2}</button>
        {hidden1? <Teacher/>:null}
        {hidden2? <Location/>:null}
    </div>
    </>
    
  )
}

export default Pages