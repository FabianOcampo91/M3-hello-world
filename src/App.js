import React, { useEffect, useState } from "react";
import './App.css'

const Hello = () => {

    const [greating, setGreating] = useState('')

    useEffect(() => {
        setGreating('!Hello Word¡😄')

    }, [])

    return (
      <body>
        <div className="App-header">
            <h1>Hello Word App</h1>
            <h2>{greating}</h2>
        </div>
        
      </body>
    )
}

export default Hello;