import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name:"lang",
    initialState:{
        lang: "en"
    },
    reducers: {
        changeLanguage: (state, actions) =>{
            state.lang = actions.payload;
        }
    }
})

export const {changeLanguage} = languageSlice.actions
export default languageSlice.reducer