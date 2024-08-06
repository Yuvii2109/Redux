// src/app/store.js code 

import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
    reducer: todoReducer
});