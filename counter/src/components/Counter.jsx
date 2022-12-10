import React, {useState} from "react";



// It is a counter created by callback function:

const Counter = () => {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState(' ');

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    function onInput(event) {
        setValue(event.target.value)
    }


    return (
        <div>
            <h1>{count}</h1>
            <p>Text from input: {value}</p>
            <button onClick={increment}>Click +</button>
            <button onClick={decrement}>Click -</button>
            <input type="text" onChange={onInput} value={value}/>
        </div>
    )
}

export default Counter;
