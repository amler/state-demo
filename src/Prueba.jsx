import { useState } from "react";

// generates initial state for component
function generateGameBoard () {
    console.log('Initial run of gameboard')
    return Array(5000);
}

// somewhat more complex logic with state
export default function Prueba () {
    const [board, setBoard] = useState(generateGameBoard()); // only pass by name rather than invoking as it will always run.
    // React will also us comparison if you set the state to the same value as previously used - won't cause rerender. 
    return <button onClick={() => setBoard('hello')}>Click to change state</button>;
}