import TicketNum from "./TicketNum";
export default function Ticket({ tickets }) {
    return (
        <div>
            { tickets.map((num, idx) => <TicketNum num={num} key={idx} />)}
        </div>
    )
}