import { createSlice } from "@reduxjs/toolkit";
import { getActorsThunk, getFullActorInfoThunk } from "./actorsThunks";
import { IActorsStateType } from "../../types/types";

 
const initialState : IActorsStateType = {
    actors: [],
    selectedActor: null,
    page: 1,
    totalPages: 0,
    isLoading: false
}

export const actorsSlice = createSlice({
    name: "actorsSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getActorsThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getActorsThunk.fulfilled, (state, action) => {
            state.actors = action.payload.results
            state.totalPages = action.payload.total_pages
            state.isLoading = false
        })

        builder.addCase(getFullActorInfoThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getFullActorInfoThunk.fulfilled, (state, action) => {
            state.selectedActor = action.payload
            state.isLoading = false
        });
    }
})

export default actorsSlice.reducer