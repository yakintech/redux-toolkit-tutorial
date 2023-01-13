import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchTodos = createAsyncThunk("todos/getAllTodos", () => {
        return axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.data);

})


let initialState = {
    todos: [],
    loading: false,
    error: ''
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.todos.push(action.payload);
        }
    },
    extraReducers: builder => {

        builder.addCase(fetchTodos.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload;
            state.error = "";

        })

        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.loading = false;
            state.todos = []
            state.error = action.error.message
        })

    }
})


export default todoSlice.reducer
