import { createAsyncThunk } from "@reduxjs/toolkit"
import { IGetMoviesReturnType, IGetMovieVideosReturnType, IMoviesType } from "../types/types"
import { API } from "../../api/api"

export const getMoviesThunk = createAsyncThunk<IGetMoviesReturnType>(
    "getMoviesThunk",
    async () => {
        const res = await API.getMovies()
        return res.data
    }
)

export const getMovieVideosThunk = createAsyncThunk<IGetMovieVideosReturnType, number>(
    "getMovieVideosThunk",
    async (id) => {
        const res = await API.getMovieVideos(id)
        return res.data
    }
)

export const getMovieByIdThunk = createAsyncThunk<IMoviesType, number>(
    "getMovieByIdThunk",
    async (id) => {
        const res = await API.getMovieById(id)
        return res.data
    }
)

export const changePageThunk = createAsyncThunk<IGetMoviesReturnType, number>(
    "changePageThunk",
    async (page) => {
        const res = await API.changePage(page)
        return res.data
    } 
)