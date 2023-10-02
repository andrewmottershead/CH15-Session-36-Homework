import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Counter Homework</h1>
            <button onClick={() => setCount((count) => count + 1)}>+</button>
            <button onClick={() => setCount((count) => count -1)}>-</button>
            <p>Count = {count} </p>
        </div>
    )
}

export default Counter
