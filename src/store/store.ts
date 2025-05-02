import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/Movies/moviesSlice"
import actorsSlice  from "./slices/Actor/actorsSlice";

export const store = configureStore({
    reducer: {
        moviesData: moviesSlice,
        actorsData: actorsSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch