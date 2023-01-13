import { createReducer } from "@reduxjs/toolkit";
import { addNewBook, deleteBook } from "../actions/booksAction";

const initialState = {
    books: []
}


export const booksReducer = createReducer(initialState, (builder) => {

    builder
        .addCase(addNewBook, (state, action) => {
            state.books.push(action.payload);
        })

    builder.addCase(deleteBook, (state, action) => {
        //id -> action.payload
        state.books = state.books.filter(q => q.id != action.payload)
    })

})

