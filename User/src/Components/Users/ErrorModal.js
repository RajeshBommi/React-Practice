import React from 'react'

const ErrorModal=(props)=> {
  return (
    <div>
    <header>
     <h2>{props.title}</h2>
    </header>
    <div>
        <p>{props.massege}</p>
    </div>
    <button>Okay</button>
    </div>
  )
}

export default ErrorModal