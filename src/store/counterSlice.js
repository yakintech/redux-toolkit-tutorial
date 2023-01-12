import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        value2: []
    },
    reducers: {
        incerement: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        incerementByValue: (state, action) => {
            state.value = state.value + Number(action.payload);
        },
        addNew : (state) => {
            let randomNumber = Math.random() * 1000;
            state.value2.push(randomNumber);
        }

    }
})

export default counterSlice.reducer

export const { incerement, decrement, incerementByValue, addNew } = counterSlice.actions;