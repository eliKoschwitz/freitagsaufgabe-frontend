import {Todo} from "./App";

function Card(obj:{key: string, todo: Todo, changeStatus:Function}){

        return(
        <div>
            hier in cards
            <li>
                {obj.todo.description}
                <p>
                    {obj.todo.status}
                </p>
                <select name={"status"} id={"status"}>
                    <option value="vw">ToDo</option>
                    <option value="opel">In Progress</option>
                    <option value="bla">Done</option>
                </select>
            </li>


            <button onClick={() => obj.changeStatus("Done")} > Change auf todo  </button>

        </div>
    )
}

export default Card;