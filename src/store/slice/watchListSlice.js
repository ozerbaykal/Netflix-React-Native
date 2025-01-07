import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    watchList: [
        {
            id: 1,
            title: "movie",
            gender: "horror"
        }
    ]
}

const watchListSlice = createSlice({

    name: "watchList",
    initialState,

    reducers: {
        addNewList: (state, action) => {
            state.watcList = [...state.watcList, action.payload]

        },


    }
})

export const { addNewList } = watchListSlice.actions;

export default watchListSlice.reducer
