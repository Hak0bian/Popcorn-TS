import { createAsyncThunk } from "@reduxjs/toolkit"
import { IGetMovieVideosReturnType, IMoviesType } from "../types/types"
import { API } from "../../api/api"

export const getMoviesThunk = createAsyncThunk<Array<IMoviesType>>(
    "getMoviesThunk",
    async () => {
        const res = await API.getMovies()
        return res.data.results
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
);