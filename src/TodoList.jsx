import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todo, setTodo] = useState([{ toDo: "Sample Task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");
    let addTasks = () => {
        setTodo([...todo, { toDo: newTodo, id: uuidv4(), isDone: false }]);
        setNewTodo("");
    };
    let newtaskValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTask = (id) => {
        // console.log(id);
        setTodo((prevTodo) =>
            todo.filter((prevTodo) =>
                prevTodo.id != id
            )
        );
    };

    let uppercaseAll = () => {
        setTodo((prevTodo) =>
            prevTodo.map((todo) => {
                return {
                    ...todo,
                    toDo: todo.toDo.toUpperCase()
                }
            }
            )
        );
    };
    let markdoneAll = () => {
        setTodo((prevTodo) =>
            prevTodo.map((todo) => {
                return {
                    ...todo,
                    isDone: true
                }
            }
            )
        );
    };

    let uppercaseOne = (id) => {
        setTodo((prevTodo) =>
            prevTodo.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        toDo: todo.toDo.toUpperCase()
                    }
                } else {
                    return todo;
                }
            }
            )
        );
    }
    let singlemarkDone = (id) => {
        setTodo((prevTodo) =>
            prevTodo.map((todo) => {
                if (todo.id === id) {
                    if (todo.isDone) {
                        return {
                            ...todo,
                            isDone: !todo.isDone
                        }
                    } else {
                        return {
                            ...todo,
                            isDone: !todo.isDone
                        }
                    }
                } else {
                    return todo;
                }
            }))
    };
    return (
        <>
            <input type="text" placeholder="enter your task" value={newTodo} onChange={newtaskValue} />
            <br /><br />
            <button onClick={addTasks}>Add Task</button>
            <br /><br />
            <br /><br />
            <hr />
            <h1>Tasks Todo</h1>
            <br />
            <ul>
                {todo.map((todo) => {
                    return <li key={todo.id}>
                        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}> {todo.toDo}</span>
                        &nbsp;
                        &nbsp;
                        <button onClick={() => deleteTask(todo.id)}>Delete</button> &nbsp;&nbsp;
                        <button onClick={() => uppercaseOne(todo.id)}>UpperCase One</button> &nbsp;&nbsp;
                        <button onClick={() => singlemarkDone(todo.id)}>Mark as Done</button>
                        <br /><br />
                    </li>
                })}
            </ul>
            <br />
            <button onClick={uppercaseAll}>UpperCase All</button><br /><br />
            <button onClick={markdoneAll}>MarkDone All</button>
        </>
    )
}