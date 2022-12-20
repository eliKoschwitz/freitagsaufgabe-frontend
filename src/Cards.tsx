import {Todo} from "./App";
import Card from "./Card"
import './cards.css';
import {BrowserRouter, Routes} from "react-router-dom";

function Cards(obj:{ todos : Todo[] , setObjekt:Function, deleteId:Function}){

    const changeObj = (objekt:Todo) => obj.setObjekt(objekt);

    const changeId = (id:string) => obj.deleteId(id);

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Root/>}/>
                </Routes>
            </BrowserRouter>



            <h1 className="headLine">  Elias-Todolist</h1>
            <div className= "rows">
                <div className="openTods">
                    <h2> Open </h2>
                    {obj.todos.filter(todo => todo.status === "Open").map(todo => (<Card  key={todo.id} todo={todo}  changeObj ={changeObj}  changeId={changeId}/>))}
                </div>
                <div className="inProgressTods">
                    <h2> In Progress </h2>
                    {obj.todos.filter(todo => todo.status === "In Progress").map(todo => (<Card  key={todo.id} todo={todo}  changeObj ={changeObj} changeId={changeId}  />))}
                </div>
                <div className="done">
                    <h2> Done </h2>
                    {obj.todos.filter(todo => todo.status === "Done").map(todo => (<Card  key={todo.id} todo={todo}  changeObj ={changeObj} changeId={changeId} />))}
                </div>
            </div>
        </div>
    )
}

export default Cards;