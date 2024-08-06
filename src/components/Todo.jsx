// src/components/Todo.jsx code

import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

export default function Todo(){
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch();
    const deleteHandler = (id) => {
        console.log("delete", id);
        dispatch(deleteTodo(id));
    }
    return(
        <div>
            <AddForm />
            <h2><b><u><i>Todos</i></u></b></h2>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        {todo.task}
                        <button onClick={() => deleteHandler(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}