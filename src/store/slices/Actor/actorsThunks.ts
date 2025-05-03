import { createAsyncThunk } from "@reduxjs/toolkit"
import { IGetActorsReturnType, ISelectedActorType } from "../../types/types";
import { API } from "../../../api/api"

export const getActorsThunk = createAsyncThunk<IGetActorsReturnType, number>(
    "getActorsThunk",
    async (page) => {
        const res = await API.getActors(page)
        return res.data
      }
    )
    
    export const getFullActorInfoThunk = createAsyncThunk<ISelectedActorType, number>(
      "getFullActorInfoThunk",
      async (id) => {
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