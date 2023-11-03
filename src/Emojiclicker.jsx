import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

export default function EmojiClicker () {
    const [emojis, setEmojis] = useState([{id: uuidv4(), emoji: '👻'}]);
    const addEmoji = () => {
        setEmojis((oldEmojis) => [...oldEmojis, {id: uuidv4(), emoji: '🎃'}])
    };
    const deleteEmoji = (id) => {
        setEmojis(previousEmojis => {
            return previousEmojis.filter(e => e.id !== id)
        })
    };
    return (
        <div>
            {emojis.map((e) => (
                <span 
                    onClick={() => deleteEmoji(e.id)} 
                    key={e.id} 
                    style={{fontSize: '4rem'}}
                >
                    {e.emoji}
                </span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    );
}