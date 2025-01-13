import { createSlice } from '@reduxjs/toolkit';
import {
    getCategories,
    getMovieDetail,
    getPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies,
} from '../actions/movieActions';

const initialState = {
    topRatedMovies: [],

    popularMovies: [],

    upComingMovies: [],

    categories: [],

    movieDetail: {},


    pending: false,
    pendingDetailMovie: false,
    error: null,
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,

    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getTopRatedMovies.pending, state => {
                state.pending = true;
            })
            .addCase(getTopRatedMovies.fulfilled, (state, action) => {
                state.topRatedMovies = action.payload;
                state.pending = false;
            })
            .addCase(getTopRatedMovies.rejected, (state, action) => {
                (state.error = action.error), (state.pending = false);
            })
            .addCase(getCategories.pending, state => {
                state.pending = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.pending = false;
            })
            .addCase(getCategories.rejected, (state, action) => {
                (state.error = action.error), (state.pending = false);
            })

            .addCase(getPopularMovies.pending, state => {
                state.pending = true;
            })
            .addCase(getPopularMovies.fulfilled, (state, action) => {
                state.popularMovies = action.payload;
                state.pending = false;
            })
            .addCase(getPopularMovies.rejected, (state, action) => {
                state.error = action.error;
                state.pending = false;
            })
            .addCase(getUpcomingMovies.pending, state => {
                state.pending = true;
            })
            .addCase(getUpcomingMovies.fulfilled, (state, action) => {
                state.upComingMovies = action.payload;
                state.pending = false;
            })
            .addCase(getUpcomingMovies.rejected, (state, action) => {
                state.error = action.error;
                state.pending = false;
            })
            .addCase(getMovieDetail.pending, (state) => {
                state.pendingDetailMovie = true;
            })
            .addCase(getMovieDetail.fulfilled, (state, action) => {
                state.movieDetail = action.payload
                state.pendingDetailMovie = false;
            })
            .addCase(getMovieDetail.rejected, (state, action) => {
                state.error = action.error;
                state.pendingDetailMovie = false
            })


    },
});

export default moviesSlice.reducer;
