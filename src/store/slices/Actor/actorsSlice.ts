import { createSlice } from "@reduxjs/toolkit";
import { getActorsThunk, getFullActorInfoThunk } from "./actorsThunks";
import { IActorsStateType } from "../../types/types";

 
const initialState : IActorsStateType = {
    actors: [],
    selectedActor: null,
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
            const newActors = action.payload.results.filter(
                newMovie => !state.actors.some(existingActor => existingActor.id === newMovie.id)
            );
            state.actors = [...state.actors, ...newActors];
            state.totalPages = action.payload.total_pages;
            state.isLoading = false;
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