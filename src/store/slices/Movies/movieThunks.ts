import { createAsyncThunk } from "@reduxjs/toolkit"
import { IGetMoviesReturnType, IGetMovieVideosReturnType, IMoviesType } from "../../types/types"
import { API } from "../../../api/api"

export const getMoviesThunk = createAsyncThunk<IGetMoviesReturnType, number>(
    "getMoviesThunk",
    async (page = 1) => {
        const res = await API.getMovies(page)
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
