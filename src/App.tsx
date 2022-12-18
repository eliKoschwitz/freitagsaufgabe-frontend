import React, {useEffect, useState} from 'react';
import Cards from './Cards';
import './App.css';
import axios from "axios";

export type Todo= {
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
    const submit2 = () => {
        (async () => {
            await axios.delete("/api/todo/"+ idToDelete);
            const todosMap = todos.filter(todo => todo.id !== idToDelete).map(todo => todo);
            setTodos(todosMap);
            console.log("hier ",todosMap);
        })();

    }
    const typeId = (event : React.ChangeEvent<HTMLInputElement>) => {
        //const name = event.target.name;
        const value = event.target.value;
        setIdToDelete(value);
    }

    // put by ID endpunkt
    const [idToPut, setIdToPut] = useState();
    // den geänderten status will ich noch ins backend geben mit put
    const [status, setStatus] = useState<string>("Done");

  return (
      <div >

          <Cards todos = {todos}   setStatus = {(status:string) => setStatus(status)}/>

          <h1>hier der status {status}</h1>
          <form onSubmit={submit} >
              <input type="text" name="description" value={newTodo.description} onChange={changeDescription}/>
              <button> description  BESTÄTIGEN  </button>
          </form>

          <form onSubmit={submit2}  >
              <input type="text" name="delete" value={idToDelete} onChange={typeId}/>
              <button type={"reset"}  onClick={()=>submit2()}> Delete By ID</button>
          </form>

      </div>
  )
}
export default App;
