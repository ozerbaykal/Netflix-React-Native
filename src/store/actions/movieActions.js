import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../service/verbs";
import { CATEGORIES_URL, MOVIE_DETAIL_URL, POPULAR_MOVIE_URL, TOP_RATED_MOVİE_URL, UPCOMING_MOVIE_URL } from "../../service/url";
import { create } from "react-test-renderer";


const getTopRatedMovies = createAsyncThunk("movies/getTopRatedMovies", async (params) => {
    const response = await getRequest(TOP_RATED_MOVİE_URL, params)
    return response.data.results;

})

const getPopularMovies = createAsyncThunk("movies/getPopularMovies",
    async (params) => {
        const response = await getRequest(POPULAR_MOVIE_URL, params)
        return response.data.results
    }
)

const getUpcomingMovies = createAsyncThunk("movies/getUpcomingMovies",
    async (params) => {
        const response = await getRequest(UPCOMING_MOVIE_URL, params)
        return response.data.results

    }
)

const getMovieDetail = createAsyncThunk("movies/getMovieDetail",
    async (params) => {
        const response = await getRequest(MOVIE_DETAIL_URL + params.movieId, params)
        return response.data;
    }
)




const getCategories = createAsyncThunk("movies/getCategories ", async (params) => {
    const response = await getRequest(CATEGORIES_URL, params)
    return response.data.genres;



})

export { getTopRatedMovies, getCategories, getPopularMovies, getUpcomingMovies, getMovieDetail }