import React, {useState} from "react";
import {Todo} from "./App";
import Card from "./Card"

function Cards(obj:{ todos : Todo[], setStatus:Function}){

    const [status, setStatus] = useState<string>();

    const changeStatus = (status:string) => obj.setStatus(status);

    return(
        <div>
            <h1>todolist</h1>
            {obj.todos.map(todo => (<Card  key={todo.id} todo={todo} changeStatus={changeStatus}  />))}
        </div>
    )
}

export default Cards;