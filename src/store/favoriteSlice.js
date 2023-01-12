import { createSlice } from "@reduxjs/toolkit";



const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: []
    },
    reducers: {
        add: (state, action) => {
            state.favorites.push(action.payload);
        },
        empty: (state) => {
            state.favorites = [];
        }
    }
})

export default favoriteSlice.reducer

export const { add, empty } = favoriteSlice.actions;

