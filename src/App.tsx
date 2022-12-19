import React, {useEffect, useState} from 'react';
import Cards from './Cards';
import './App.css';
import axios from "axios";
//import './card.css';

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
    const [status, setStatus] = useState<string>("Done");



    // put by ID endpunkt
    const putTodo= {
        id : "",
        description : "",
        status : "",
    };
    const[objAfterPut, setObjAfterPut] = useState<Todo>(putTodo);
    const setAfterPut = (objPut:Todo) => { setObjAfterPut(objPut)};

    useEffect( () =>{
        (async () => {
            await axios.put("/api/todo/"+ objAfterPut.id, objAfterPut);
        }) ()
    }, [objAfterPut]); // wenn das putTodo sich ändert wird das backend verändert

  return (
      <div className="" >

          <Cards todos = {todos}   setStatus = {(status:string) => setStatus(status)}   setObjekt = {(setAfterPut)}/>

          <h1>Status in Main {objAfterPut.status} der Card {objAfterPut.id}</h1>

          <form onSubmit={submit} >
              <input type="text" name="description" value={newTodo.description} onChange={changeDescription}/>
              <button> ADD  </button>
          </form>

          <form onSubmit={submit2}  >
              <input type="text" name="delete" value={idToDelete} onChange={typeId}/>
              <button type={"reset"}  onClick={()=>submit2()}> DELETE </button>
          </form>

      </div>
  )
}
export default App;
