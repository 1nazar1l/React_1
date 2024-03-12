import { useState } from "react";
import "./Counter.css"

function MyComponent() {
    const[count, setCount] = useState(0)
    console.log(count)
    function plus() {
        setCount(count+1)
    }
    function minus() {
        setCount(count-1)
    }
    return(
        <div className="Counter">
            <div>
                <h2>Счетчик:</h2>
                <h1 className="count">{count}</h1>
                <button className="plus" onClick={plus}>Плюс</button>
                <button className="minus" onClick={minus}>Минус</button>
            </div>
        </div>
    )
}

export default MyComponent;