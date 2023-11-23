import { useState } from "react";

// somewhat more complex logic with state
function ScoreKeeper ({numPlayers=3, target=5}) {
    
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));
    const incrementScore = (idx) => {
        setScores(prevScores => {
            // intuitive way to do this:
            // const copy = [...prevScores];
            // copy[idx] += 1;
            // return copy;
            return prevScores.map((score, i) => {
                if (i === idx) return score + 1;
                return score;
            })
        })
    }

    const reset = () => {
        setScores(new Array(numPlayers).fill(0))
    }
    return (
        <div>
            <h2>Score Keeper</h2>
            <ul>
                {scores.map((score, idx) => {
                    return  (
                        <li key={idx}>
                            Player{idx + 1}: {score}
                            {/* bake in the corect index */}
                            <button onClick={() => incrementScore(idx)}>+1</button>
                        </li>
                    )
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default ScoreKeeper;