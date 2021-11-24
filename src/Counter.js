import React, { useState } from 'react'
const Counter = () => {
    const [count, setCount] = useState(0)
    const [history, setHistory] = useState([])
    
    const updateCount = (i) => {
        if(i) setCount(count+i)
        else setCount(0)
        setHistory([count, ...history])
    }
    return (
        <div className="container">
            <h2>{count}</h2>
            <button type="button" className="btn" onClick={()=>updateCount(1)}>Increase by 1</button>
            <button type="button" className="btn" onClick={()=>updateCount(-1)}>Decrease by 1</button>
            <button type="button" className="btn" onClick={()=>updateCount(0)}>Reset Counter</button>
            <button type="button" className="btn" onClick={()=>setHistory([])}>Reset History</button>
            <ul>
                {history.map((event,index)=>{
                    return( 
                    <li key={index}>{event}</li>
                    )
                })} 
            </ul>
        </div>
    )
}
export default Counter