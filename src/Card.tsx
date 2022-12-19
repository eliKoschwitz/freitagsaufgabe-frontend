import {Todo} from "./App";
import React from "react";

function Card(obj:{key: string, todo: Todo, changeStatus:Function}){

    function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value;
        obj.todo.status = value;
    }

    return(
        <div>
            hier in cards
            <li>
                {obj.todo.description}
                <p>
                    {obj.todo.status}
                </p>
                <select name={"status"} id={"status"} onChange={onSelectChange}>
                    <option value="Todo">ToDo</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
            </li>


            <button onClick={() => obj.changeStatus(obj.todo.status)} > Change auf todo  </button>

        </div>
    )
}

export default Card;