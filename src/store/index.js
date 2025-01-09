import { configureStore } from "@reduxjs/toolkit";
import watchListSlice from "./slice/watchListSlice";
import movieSlice from "./slice/movieSlice";

const store = configureStore({

    reducer: {
        watchList: watchListSlice,
        movies: movieSlice

    }

})

export default store;
