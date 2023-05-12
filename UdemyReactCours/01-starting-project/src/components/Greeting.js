import React, { useState } from 'react'

const Greeting = () => {
    const [changedtest, setChangedText] = useState(false)

    const changeTextHandler = () => {
        setChangedText(true)
    }
    return (
        <div>
            <h2>Hello World!</h2>
            {!changedtest && <p>Its good to see you</p>}
            {changedtest && <p>changed here</p>}
            <button onClick={changeTextHandler}></button>
        </div>
    )
}

export default Greeting
