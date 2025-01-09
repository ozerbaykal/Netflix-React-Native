import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    watchList: [
        {
            id: 1,
            title: "All",
            gender: "horror"
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


    },

})

export const { addNewList } = watchListSlice.actions;

export default watchListSlice.reducer
