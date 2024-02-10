import { useState } from "react";
export default function Couter() {
    const [count, setCount] = useState(0);
    function incCount() {
        setCount((currCount) => {
            return currCount + 1;
        });
        setCount((currCount) => {
            return currCount + 1;
        });
        setCount((currCount) => {
            return currCount + 1;
        });
        console.log(count);
    }
    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Your Counter</button>
        </div>
    )
} 