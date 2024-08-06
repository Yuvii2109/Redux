// src/features/todo/todoSlice.js code

import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{
        id: 1,
        task: "demo",
        isDone: false
    }],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: { //state,action
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false
            }
            state.todos.push(newTodo); // direct mutation
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        markAsDone: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.isDone = true;
                    return todo;
                }
            })
        }
    }
});

export const {addTodo, deleteTodo, markAsDone} = todoSlice.actions;
export default todoSlice.reducer;