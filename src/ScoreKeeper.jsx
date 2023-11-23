import { useState } from "react";

// somewhat more complex logic with state
function ScoreKeeper ({numPlayers=3, target=5}) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));

    return (
        <div>
            <h2>Score Keeper</h2>
            <ul>
                {scores.map((score, idx) => {
                    return  (
                        <li key={idx}>
                            Player{idx + 1}: {score}
                        </li>
                    )
                })}
            </ul>
            {/* <p>Player 1: {scores.p1Score}</p>
            <p>Player 2: {scores.p2Score}</p>
            <button onClick={increaseP1Score}>+1 Player 1</button>
            <button onClick={increaseP2Score}>+1 Player 2</button> */}
        </div>
    );
}

export default ScoreKeeper;