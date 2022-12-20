import {Todo} from "./App";
import React from "react";
import './card.css';


function Card(obj:{key: string, todo: Todo, changeObj:Function, changeId:Function}){

    const backFunktion= () => {obj.changeObj(obj.todo)};

    function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value;
        obj.todo.status = value;
        backFunktion();
    }

    const deleteByID = () => {
        obj.changeId(obj.todo.id);
        console.log("diese Id soll durchgereicht werden",obj.todo.id);
    };

    return(
        <div className="card">
            <li className="taskStatus">
                <p className= "taskStatusText" >
                    Aufgabe: {obj.todo.description}
                </p>
                <p className= "taskStatusText" >
                    Aufgabenstatus: {obj.todo.status}
                </p>
                <select className="dropdown" onChange={onSelectChange} value={obj.todo.status}>
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