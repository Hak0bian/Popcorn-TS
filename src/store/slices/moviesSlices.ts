import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api/api";
import { StateType } from "../types/types";

export const getMoviesThunk = createAsyncThunk(
    "getMoviesThunk",
    async () => {
        const res = await API.getMovies()
        return res.data.results
    }
)

export const getMovieVideosThunk = createAsyncThunk(
    "getMovieVideosThunk",
    async (id: number) => {
        const res = await API.getMovieVideos(id)
        return res.data
    }
)

const initialState : StateType = {
    movies: [],
    movieVideos: []
}

const moviesSlice = createSlice({
    name: "MoviesSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMoviesThunk.fulfilled, (state, action) => {
            state.movies = action.payload
        })

        builder.addCase(getMovieVideosThunk.fulfilled, (state, action) => {
            state.movieVideos = action.payload.results
        })
    }
})

export default moviesSlice.reducer