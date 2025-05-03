import { createSlice } from "@reduxjs/toolkit";
import { getActorsThunk, getFullActorInfoThunk } from "./actorsThunks";
import { IActorsStateType } from "../../types/types";

 
const initialState : IActorsStateType = {
    actors: [],
    selectedActor: null,
    page: 1,
    totalPages: 0
}

export const actorsSlice = createSlice({
    name: "actorsSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getActorsThunk.fulfilled, (state, action) => {
            state.actors = action.payload.results
            state.totalPages = action.payload.total_pages
        })

        builder.addCase(getFullActorInfoThunk.fulfilled, (state, action) => {
            state.selectedActor = action.payload;
        });
    }
})

export default actorsSlice.reducer