import { useState } from "react";

export default function Counter () {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(c => c + 1);
    }
    const addThree = () => {
        setCount(currentCount => currentCount + 1);
        setCount(currentCount => currentCount + 1);
        setCount(currentCount => currentCount + 1);
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Add +1</button>
            <button onClick={addThree}>Add +3</button>
        </div>
    );
}