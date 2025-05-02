import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetMovieVideosReturnType, IMoviesType, StateType } from "../types/types";
import { getMoviesThunk, getMovieVideosThunk, getMovieByIdThunk } from "./sliceThunks";


const initialState : StateType = {
    movies: [],
    movieVideos: [],
    selectedMovie: null
}

const moviesSlice = createSlice({
    name: "MoviesSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMoviesThunk.fulfilled, (state, action: PayloadAction<Array<IMoviesType>>) => {
            state.movies = action.payload
        })

        builder.addCase(getMovieVideosThunk.fulfilled, (state, action: PayloadAction<IGetMovieVideosReturnType>) => {
            state.movieVideos = action.payload.results
        })

        builder.addCase(getMovieByIdThunk.fulfilled, (state, action: PayloadAction<IMoviesType>) => {
            state.selectedMovie = action.payload
        })
    }
})

export default moviesSlice.reducer