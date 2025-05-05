import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetMoviesReturnType, IGetMovieVideosReturnType, IMoviesType, IMoviesStateType } from "../../types/types";
import { getMoviesThunk, getMovieVideosThunk, getMovieByIdThunk } from "./movieThunks";


const initialState : IMoviesStateType = {
    movies: [],
    movieVideos: [],
    selectedMovie: null,
    totalPages: 0,
    isLoading: false
}

const moviesSlice = createSlice({
    name: "MoviesSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMoviesThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getMoviesThunk.fulfilled, (state, action: PayloadAction<IGetMoviesReturnType>) => {
            const newMovies = action.payload.results.filter(
                newMovie => !state.movies.some(existingMovie => existingMovie.id === newMovie.id)
            );
            state.movies = [...state.movies, ...newMovies];
            state.totalPages = action.payload.total_pages;
            state.isLoading = false;
        })

        builder.addCase(getMovieVideosThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getMovieVideosThunk.fulfilled, (state, action: PayloadAction<IGetMovieVideosReturnType>) => {
            state.movieVideos = action.payload.results
            state.isLoading = false
        })

        builder.addCase(getMovieByIdThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getMovieByIdThunk.fulfilled, (state, action: PayloadAction<IMoviesType>) => {
            state.selectedMovie = action.payload
            state.isLoading = false
        })
    }
})

export default moviesSlice.reducer