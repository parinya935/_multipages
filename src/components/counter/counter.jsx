import { useState } from 'react'
import './counter.css'

function Counter (props) {

    // let name = 'John'
    // let value = props.value
    const [value, setValue] = useState(props.value || 0)

    function increment() {
        setValue(value + 1)
    }

    function decrement() {
        setValue(value - 1)
    }

    return (
    <div className='counter-container'>
    <h3 className='counter-title'>{props.name || 'Counter'}</h3>
    <button className='btn btn-danger' onClick={decrement}>-</button>
    <span className='counter-value'>{value}</span>
    <button className='btn btn-success' onClick={increment}>+</button>
    </div> 
);
}

export default Counter ;