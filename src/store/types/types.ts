export type IMoviesStateType = {
    movies: Array<IMoviesType>;
    movieVideos: Array<IMovieVideosResultsType>;
    selectedMovie: IMoviesType | null,
    totalPages: number,
    isLoading: boolean
}

export interface IMoviesType {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    media_type?: string
    character?: string,
    order?: number,
    job?: string
}

export interface IMovieVideosResultsType {
    iso_639_1: string 
    iso_3166_1: string 
    name: string 
    key: string 
    site: string 
    size: number
    type: string
    official: number
    published_at: string
    id: string
}

export interface IGetMoviesReturnType {
    page: number,
    results: Array<IMoviesType>
    total_pages: number
    total_results: number
}

export interface IGetMovieVideosReturnType {
    id: number,
    results: Array<IMovieVideosResultsType>
}


// /////////////////////////////////////////////


export type IActorsStateType = {
    actors: Array<IActorType>;
    selectedActor: ISelectedActorType | null;
    totalPages: number,
    isLoading: boolean
}

export interface IActorType {
    id: number;
    adult: boolean,
    name: string;
    original_name: string,
    gender: number,
    popularity: number,
    profile_path: string | null;
    known_for: Array<IMoviesType>
    known_for_department: string
}

export interface ISelectedActorType {
    id: number;
    imdb_id: string,
    name: string;
    biography: string,
    place_of_birth: string,
    birthday: string,
    deathday: string | null
    profile_path: string | null;
    adult: boolean,
    gender: number,
    known_for_department: string
    popularity: number,
    also_known_as: [],
    homepage: number | null,
    known_for: Array<IMoviesType>;
}

export interface IGetActorsReturnType {
    page: number,
    results: Array<IActorType>
    total_pages: number
    total_results: number
}
