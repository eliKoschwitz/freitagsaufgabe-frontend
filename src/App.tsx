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
        status : "Open"
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
    const deleteByID = (idToDelete:string) => {
        axios.delete("/api/todo/" + idToDelete);
        const todosMap = todos.filter(todo => todo.id !== idToDelete).map(todo => todo); // map muss hier nicht
        setTodos(todosMap);
    };

    // put by ID endpunkt
    const putById = (objAfterPut:Todo) =>{
        (async () => {
        const response = await axios.put("/api/todo/"+ objAfterPut.id, objAfterPut);
        const updatedTodo = todos.map(todo => todo.id === response.data.id? response.data : todo);
        setTodos(updatedTodo);
    }) ()
    }

  return (
      <div >
          <div >
              <Cards todos = {todos} putId= {putById} deleteId = {deleteByID} />
          </div>

          <form onSubmit={submit} >
              <input type="text" name="description" value={newTodo.description} onChange={changeDescription}/>
              <button type={"submit"}> ADD  </button>
          </form>
      </div>
  )
}
export default App;