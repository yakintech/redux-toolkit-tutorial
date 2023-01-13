import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: []
    },
    reducers: {
        add: (state, action) => {
            console.log('ACTION', action);
            state.favorites.push(action.payload);
        },
        empty: (state) => {
            state.favorites = [];
        },
        load: (state, action) => {
            state.favorites = action.payload
        }
    }
})




export default favoriteSlice.reducer

export const { add, empty, load } = favoriteSlice.actions;


export const addToFavFromById = (id) => (dispatch) => {
    axios.get(`https://northwind.vercel.app/api/products/${id}`)
        .then(res => {
            dispatch(add(res.data))
        })
}

export const loadProducts = () => (dispatch) => {
    axios.get('https://northwind.vercel.app/api/products/')
        .then(res => {
            dispatch(load(res.data));
        })
}


