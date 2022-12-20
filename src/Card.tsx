import {Todo} from "./App";
import React from "react";
import './card.css';


function Card(props:{key: string, todo: Todo, changeObj:Function, changeId:Function}){

    const backFunktion= () => {props.changeObj(props.todo)};

    function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value;
        props.todo.status = value;
        backFunktion();
    }

    const deleteByID = () => {
        props.changeId(props.todo.id);
        console.log("diese Id soll durchgereicht werden",props.todo.id);
    };

    return(
        <div className="card">
            <li className="taskStatus">
                <p className= "taskStatusText" >
                    Aufgabe: {props.todo.description}
                </p>
                <p className= "taskStatusText" >
                    Aufgabenstatus: {props.todo.status}
                </p>
                <select className="dropdown" onChange={onSelectChange} value={props.todo.status}>
                    <option value="Open">Open </option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
            </li>
            <button onClick={ () => deleteByID() }> löschen </button>

        </div>
    )
}

export default Card;