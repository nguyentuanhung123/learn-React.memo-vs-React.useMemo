import React, { useState } from 'react'

const NewComponent = ({ children }) => {

    const [count, setCount] = useState(0);

    return (
        <>
            <p>outer count: {count}</p>
            <div>
              <p>Count: {count}</p>
              <button onClick={() => setCount(count + 1)}>Add</button>

              { children }
            </div>
        </>
    )
}

export default NewComponent
