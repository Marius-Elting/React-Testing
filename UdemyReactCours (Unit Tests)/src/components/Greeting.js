import React, { useState } from 'react'
import Output from './Output'

const Greeting = () => {
    const [changedtest, setChangedText] = useState(false)

    const changeTextHandler = () => {
        setChangedText(true)
    }
    return (
        <div>
            <h2>Hello World!</h2>
            {!changedtest && <Output>Its good to see you</Output>}
            {changedtest && <Output>changed here</Output>}
            <button onClick={changeTextHandler}></button>
        </div>
    )
}

export default Greeting
