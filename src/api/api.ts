import axios from "axios";
import { IGetMoviesReturnType, IGetMovieVideosReturnType, IMoviesType } from "../store/types/types";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGM4NjNiZjI5MWY1NjUxOTAyYmIzYWY4MjI1NmUwMiIsIm5iZiI6MTYzMzAzODA3MC4xODksInN1YiI6IjYxNTYyZWY2ZTE4Yjk3MDA2MjkyODgzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tWdMFrwBFk5nv9F9lMxrlIRw1vmaj0eIf4F1wjNztd8",
    }
})

export const API = {
    getMovies(){
        return instance.get<IGetMoviesReturnType>(`/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc`)
    },

    getMovieVideos(id: number){
        return instance.get<IGetMovieVideosReturnType>(`/movie/${id}/videos?language=en-US`)
    },

    getMovieById(id: number){
        return instance.get<IMoviesType>(`/movie/${id}`)
    },

    changePage(page: number){
        return instance.get(`/discover/movie?include_adult=false&language=en-US&page=${page}&sort_by=popularity.desc`)
    },
    ///person/popular?language=en-US&page=${actorPage}
}