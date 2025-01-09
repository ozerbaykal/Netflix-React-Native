import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../service/verbs";
import { TOP_RATED_MOVİE_URL } from "../../service/url";


const getTopRatedMovies = createAsyncThunk("movies/getTopRatedMovies", async (params) => {
    const response = await getRequest(TOP_RATED_MOVİE_URL, params)
    return response.data.results;



})

export { getTopRatedMovies }