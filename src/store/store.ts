import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlices"

export const store = configureStore({
    reducer: {
        moviesData: moviesSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch