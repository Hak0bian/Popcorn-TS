import { createAsyncThunk } from "@reduxjs/toolkit"
import { API } from "../../../api/api"

export const getActorsThunk = createAsyncThunk(
    "getActorsThunk",
    async (page: number) => {
        const res = await API.getActors(page)
        return res.data
    }
)

export const getFullActorInfoThunk = createAsyncThunk(
    "getFullActorInfoThunk",
    async (id: number) => {
      const [actorRes, knownForRes] = await Promise.all([
        API.getActorById(id),
        API.getActorKnownFor(id)
      ]);
  
      return {
        ...actorRes.data,
        known_for: knownForRes.data.crew,
      };
    }
);