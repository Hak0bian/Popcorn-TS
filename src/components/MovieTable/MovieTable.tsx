import { useAppSelector } from '../../store/hooks/hooks'
import { BsStarFill } from "react-icons/bs";
import st from "./MovieTable.module.css"

const MovieTable = ({movieId}: { movieId: number }) => {
    const {movies, movieVideos} = useAppSelector((state => state.moviesData))
    const movie = movies.find(movie => movie.id === +movieId)

    if (!movie) return <p>Movie not found</p> 
    const trailer = movieVideos.find(obj => obj.type === "Trailer")
    let key = trailer ? trailer.key : null;

    return (
        <div className={st.movieTable}>
            <div className={st.posterDiv}>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
            </div>
            
            <div className={st.movieInfo}>
                <h2>{movie.title}</h2>
                <div className={st.info}>
                    <p>Language: {movie.original_language}</p>
                    <p>Date: {movie.release_date}</p>
                    <p>Rating: {movie.vote_average.toFixed(1)}
                        <BsStarFill className={st.star}/>
                    </p>
                    <p>Rating Count: {movie.vote_count}</p>
                    <p>Adult: {movie.adult === false ? "No" : "Yes"}</p>
                </div>

                <h3>Overview</h3>
                <p>{movie.overview}</p>
                
                <iframe
                    width="400"
                    height="220"
                    src={`https://www.youtube.com/embed/${key}`}
                    title="..."
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default MovieTable