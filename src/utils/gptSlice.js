import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState :{
        toggleview: false
    },
    reducers: {
        toggleScreen: (state) =>{
            state.toggleview = !state.toggleview;
        }
    }
})


export const {toggleScreen} = gptSlice.actions;
export default gptSlice.reducer