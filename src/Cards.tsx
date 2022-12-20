import {Todo} from "./App";
import Card from "./Card"
import './cards.css';

function Cards(obj:{ todos : Todo[] , setObjekt:Function}){

    const changeObj = (objekt:Todo) => obj.setObjekt(objekt);

    console.log(obj.todos);
    const filterTodoOpen = obj.todos.filter(todo => todo.status === "Open")
    console.log(filterTodoOpen)


    return(
        <div>
            <h1 className="headLine">  Elias-Todolist</h1>
            <div className= "rows">
                <div className="openTods">
                    <h2> Open </h2>
                    {obj.todos.filter(todo => todo.status === "Open").map(todo => (<Card  key={todo.id} todo={todo}  changeObj ={changeObj}  />))}
                </div>
                <div className="inProgressTods">
                    <h2> In Progress </h2>
                    {obj.todos.filter(todo => todo.status === "In Progress").map(todo => (<Card  key={todo.id} todo={todo}  changeObj ={changeObj}  />))}
                </div>
                <div className="done">
                    <h2> Done </h2>
                    {obj.todos.filter(todo => todo.status === "Done").map(todo => (<Card  key={todo.id} todo={todo}  changeObj ={changeObj}  />))}
                </div>
            </div>
        </div>
    )
}

export default Cards;