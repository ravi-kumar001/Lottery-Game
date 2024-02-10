import { useState } from "react"
import { getTicket, sum } from "./helper"
import "./LotteryGame.css"

export default function LotteryGame() {
    let [tickets, setTickets] = useState(getTicket(3));
    let winTicket = sum(tickets) === 15;
    let moreTickets = () => {
        setTickets(getTicket(3))
    };
    return (
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{tickets[0]}</span>
                <span>{tickets[1]}</span>
                <span>{tickets[2]}</span>
            </div>
            <h3>{winTicket && "Congratulations You Won!"}</h3>
            <button onClick={moreTickets}>Buy More Tickets</button>
        </div>

    )
}