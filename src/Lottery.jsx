import { useState } from "react"
import { getTicket } from "./helper"
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n, winCondition }) {
    let [tickets, setTickets] = useState(getTicket(n))
    let winTicket = winCondition(tickets);
    let moreTickets = () => {
        setTickets(getTicket(n))
    };
    return (
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <Ticket tickets={tickets} />
            </div>
            <h3>{winTicket && "Congratulations You Won!"}</h3>
            <Button action={moreTickets} />
        </div>
    )
}