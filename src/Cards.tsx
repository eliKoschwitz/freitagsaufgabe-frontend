import {Todo} from "./Home";
import Card from "./Card"
import './cards.css';
import {Link} from "react-router-dom";
import React from "react";

function Cards(props:{ todos : Todo[] , putId:Function, deleteId:Function}){

    const changeObj = (objekt:Todo) => props.putId(objekt);
    const changeId = (id:string) => props.deleteId(id);

    return(
        <div>
            <h1 className="headLine">  Elias-Todolist</h1>

            <div className= "rows">
                <div className="openTods">
                    <Link to="/OpenTodos"> Open Todos</Link>
                    <h2> Open </h2>
                    {props.todos.filter(todo => todo.status === "Open").map(todo => (<Card  key={todo.id} todo={todo}  changeObj ={changeObj}  changeId={changeId}/>))}
                </div>
                <div className="inProgressTods">
                    <Link to="/OpenTodos"> Open Todos</Link>
                    <h2> In Progress </h2>
                    {props.todos.filter(todo => todo.status === "In Progress").map(todo => (<Card  key={todo.id} todo={todo}  changeObj ={changeObj} changeId={changeId}  />))}
                </div>
                <div className="done">
                    <Link to="/OpenTodos"> Open Todos</Link>
                    <h2> Done </h2>
                    {props.todos.filter(todo => todo.status === "Done").map(todo => (<Card  key={todo.id} todo={todo}  changeObj ={changeObj} changeId={changeId} />))}
                </div>
            </div>
        </div>
    )
}

export default Cards;