import {Todo} from "./App";
import React from "react";
import './card.css';

/*
<button onClick={() => obj.changeObj(obj.todo)} > Objekt an Main senden  </button>
 */

function Card(obj:{key: string, todo: Todo, changeStatus:Function, changeObj:Function}){

    const backFunktion= () => {obj.changeObj(obj.todo)};

    function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value;
        obj.todo.status = value;
        console.log()
        backFunktion();
    }

    return(
        <div className="card">
            <li className="taskStatus">
                <p className= "taskStatusText" >
                    Aufgabe: {obj.todo.description}
                </p>

                <p className= "taskStatusText" >
                    Aufgabenstatus: {obj.todo.status}
                </p>
                <select className="dropdown" onChange={onSelectChange}>
                    <option value="Todo">ToDo</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
            </li>

            <button onClick={() => obj.changeStatus(obj.todo.status)} > Change Status  </button>

        </div>
    )
}

export default Card;