import React, {useState} from "react";
import {Todo} from "./App";
import Card from "./Card"

function Cards(obj:{ todos : Todo[], setStatus:Function, setObjekt:Function}){

    //const [status, setStatus] = useState<string>();
    const changeStatus = (status:string) => obj.setStatus(status);

   // const [objekt, setObjekt] = useState<Todo>();
    const changeObj = (obj1:Todo) => obj.setObjekt(obj1);

    return(
        <div>
            <h1>  Elias-Todolist</h1>
            {obj.todos.map(todo => (<Card  key={todo.id} todo={todo} changeStatus={changeStatus} changeObj ={changeObj}  />))}
        </div>
    )
}

export default Cards;