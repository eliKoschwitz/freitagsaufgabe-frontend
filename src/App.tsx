import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Menu from "./components/DropDownMenu";

type Todo= {
  id : string;
  description : string;
  status : string;
};

type postTodo= {
    description : string;
    status : string;
};


function App() {

    // get endpunkt
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect( () =>{
    (async () => {
      const response = await axios.get("/api/todo");
      setTodos(response.data);
    }) ()
  }, []);

    // post endpunkt
    const initialTodo={
        description : "",
        status : "OPEN"
    }

    const [newTodo, setNewTodo] = useState<postTodo>(initialTodo);
    const submit = () => {
        (async () => {
            const response = await axios.post("/api/todo", newTodo);
            setTodos([...todos,response.data]);
        })();
    }

    const changeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nameIsDescription = event.target.name; // aber nur in diesem fall da wir ein input haben ist immer das gleiche input ist
        const value = event.target.value;
        setNewTodo({ ...newTodo, [nameIsDescription] : value} ) // computed property's
    }

    // delete by ID endpunkt
    const [idToDelete, setIdToDelete] = useState<string>("");
    console.log("die Id die gelöscht werden soll" ,idToDelete)
    const submit2 = () => {
        (async () => {
            await axios.delete("/api/todo/"+ idToDelete);
            const todosMap = todos.filter(todo => todo.id !== idToDelete).map(todo => todo);
            setTodos(todosMap);
        })();
    }

    const typeId = (event : React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        if(name==="delete"){
            setIdToDelete(value);
        }
        if(name === "put" ){
            setIdToPut(value);
        }
    }

    // put by ID endpunkt
    const [idToPut, setIdToPut] = useState<string>("");
    const submit3 = () => {
        (async () => {
            const response = await axios.put("/api/todo/"+ idToPut);
            console.log(response)
            //setTodos(response);
            //console.log("hier ",todosMap);
        })();
    }


  return (
      <div>
        <Menu/>
        <h1>todolist</h1>
        {todos.map(todo => <li key={todo.id}> {todo.description} <button onClick={()=>{ }}> Weiter </button></li> )}

          <form onSubmit={submit} >
              <input type="text" name="description" value={newTodo.description} onChange={changeDescription}/>
              <button> description BESTÄTIGEN  </button>
          </form>

          <form onSubmit={submit2}  >
              <input type="text" name="delete" value={idToDelete} onChange={typeId}/>
              <button type={"reset"} onClick={()=>submit2()}> Delete By ID</button>
          </form>

          <form onSubmit={submit3}  >
              <input type="text" name="put" value={idToPut} onChange={typeId}/>

          </form>

      </div>
  )
}
export default App;
