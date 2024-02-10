import React, { useState } from 'react';

export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
    let [arr, setArr] = useState([]);
    let updateBlue = () => {
        setMoves((preMoves) => {
            console.log(preMoves)
            return { ...preMoves, blue: preMoves.blue + 1 };
        });
        while (arr.length > 0) {
            arr.pop();
        }
        setArr((prevArr) => {
            return [...prevArr, "Blue Moves"];
        })
    }
    let updateYellow = () => {
        setMoves((preMoves) => {
            return { ...preMoves, yellow: preMoves.yellow + 1 };
        })
        while (arr.length > 0) {
            arr.pop();
        }
        setArr((prevArr) => {
            return [...prevArr, "Yellow Moves"];
        })
    }
    let updateGreen = () => {
        setMoves((preMoves) => {
            return { ...preMoves, green: preMoves.green + 1 };
        });
        while (arr.length > 0) {
            arr.pop();
        };
        setArr((prevArr) => {
            return [...prevArr, "Green Moves"];
        })
    }
    let updateRed = () => {
        setMoves((preMoves) => {
            return { ...preMoves, red: preMoves.red + 1 };
        });
        while (arr.length > 0) {
            arr.pop();
        };
        setArr((prevArr) => {
            return [...prevArr, "Red Moves"];
        })
    }
    return (
        <>
            <h1>{arr}</h1>
            <p>Game begins!</p>
            <div>
                <p>Blue moves ={moves.blue} </p>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>
            </div>
            <div>
                <p>Yellow moves ={moves.yellow} </p>
                <button onClick={updateYellow} style={{ backgroundColor: "yellow", color: "black" }}>+1</button>
            </div>
            <div>
                <p>Green moves = {moves.green} </p>
                <button onClick={updateGreen} style={{ backgroundColor: "green" }}>+1</button>
            </div>
            <div>
                <p>Red moves = {moves.red} </p>
                <button onClick={updateRed} style={{ backgroundColor: "red" }}>+1</button>
            </div>
        </>
    )
}