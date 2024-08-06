// src/components/AddForm.jsx

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm(){
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        setTask("");
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <input type="text" value={task} 
                onChange={(event) => setTask(event.target.value)} />
                <br /> <br />
                <button>Add task</button>
            </form>
        </>
    )
}