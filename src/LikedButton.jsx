import { useState } from "react"


export default function LikedButton() {
    let [count, setCount] = useState(0);
    let [icon, setIcon] = useState(false);
    let set = () => {
        setIcon(!icon);
        setCount(count + 1);
    }
    return (
        <>
            <p>States in React</p>
            <h3 onClick={set}>Clicks = {count}</h3>
            <p onClick={set}>{icon ? <i className="fa-regular fa-heart"></i> : <i style={{ color: "red" }} className="fa-solid fa-heart"></i>}</p>
        </>
    )
}