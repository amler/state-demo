import { useState } from "react";

// somewhat more complex logic with state
function ScoreKeeper () {
    const [scores, setScores] = useState({p1Score: 0, p2Score: 0});
    const increaseP1Score = () => {
        // When working with a nonprimitive type you have to make a copy of the object for react to see thes a change.
        // const newScores = {...scores, p1Score: scores.p1Score + 1}
        setScores((oldScores) => {
            return {...oldScores, p1Score: scores.p1Score + 1};
        });
    }
    const increaseP2Score = () => {
        setScores((oldScores) => {
            return {...oldScores, p2Score: scores.p2Score + 1};
        });
    }
    return (
        <div>
            <p>Player 1: {scores.p1Score}</p>
            <p>Player 2: {scores.p2Score}</p>
            <button onClick={increaseP1Score}>+1 Player 1</button>
            <button onClick={increaseP2Score}>+1 Player 2</button>
        </div>
    );
}

export default ScoreKeeper;