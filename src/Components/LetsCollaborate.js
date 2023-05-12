import React from 'react'
import "../App.css"
import AI from "./AI.jpg.png"

const LetsCollaborate = (props) => {
  return (
    <>
    

    <div className='container'>
        <div className='ai'>
            <h2 className='my-3'>{props.main}</h2>
            
            <h4 className='my-5 ' > {props.description}</h4>
            
        </div>
        <div>
            <img className='my-3' src={props.photo} alt="AI + RPA" />

            
        </div>
    </div>
    <div className="final container ">
        <p>{props.final} <span>&#8594;</span> </p> 
    </div>
    </>
  )
}

export default LetsCollaborate