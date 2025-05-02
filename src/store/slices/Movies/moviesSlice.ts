import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetMoviesReturnType, IGetMovieVideosReturnType, IMoviesType, IMoviesStateType } from "../../types/types";
import { getMoviesThunk, getMovieVideosThunk, getMovieByIdThunk } from "./movieThunks";


const initialState : IMoviesStateType = {
    movies: [],
    movieVideos: [],
    selectedMovie: null,
    page: 1,
    totalPages: 0
}

const moviesSlice = createSlice({
    name: "MoviesSlice",
    initialState,
    reducers: {
        changePage(state, action : PayloadAction<number>){
            state.page = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getMoviesThunk.fulfilled, (state, action: PayloadAction<IGetMoviesReturnType>) => {
            state.movies = action.payload.results
            state.totalPages = action.payload.total_pages
        })

        builder.addCase(getMovieVideosThunk.fulfilled, (state, action: PayloadAction<IGetMovieVideosReturnType>) => {
            state.movieVideos = action.payload.results
        })

        builder.addCase(getMovieByIdThunk.fulfilled, (state, action: PayloadAction<IMoviesType>) => {
            state.selectedMovie = action.payload
        })
    }
})

export const { changePage } = moviesSlice.actions
export default moviesSlice.reducer