export type StateType = {
    movies: Array<IMoviesType>;
    movieVideos: Array<IMovieVideosResultsType>;
    selectedMovie: IMoviesType | null,
    page: number,
    totalPages: number
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
    release_date:  string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
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