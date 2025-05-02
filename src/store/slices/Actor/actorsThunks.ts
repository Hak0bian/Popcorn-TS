import { createAsyncThunk } from "@reduxjs/toolkit"
import { API } from "../../../api/api"

export const getActorsThunk = createAsyncThunk(
    "getActorsThunk",
    async (page: number) => {
        const res = await API.getActors(page)
        return res.data
    }
)

export const getActorByIdThunk = createAsyncThunk(
    "getActorByIdThunk",
    async (id: number) => {
        const res = await API.getActorById(id)
        return res.data
    }
)