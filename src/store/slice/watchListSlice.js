import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    watchList: [
        {
            id: 1,
            title: "movie",
            gender: "horror"
        },
        {
            id: 2,
            title: "movie",
            gender: "comedy"
        },
        {
            id: 3,
            title: "movie",
            gender: "romance"
        },
        {
            id: 4,
            title: "movie",
            gender: "west"
        },
    ],
}

const watchListSlice = createSlice({

    name: "watchList",
    initialState,

    reducers: {
        addNewList: (state, action) => {
            state.watchList = [...state.watchList, action.payload]

        },


    }
})

export const { addNewList } = watchListSlice.actions;

export default watchListSlice.reducer
