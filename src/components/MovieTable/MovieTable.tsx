import { useAppSelector } from '../../store/hooks/hooks'
import { BsStarFill } from "react-icons/bs";
import st from "./MovieTable.module.css"

const MovieTable = () => {
    const {movieVideos, selectedMovie} = useAppSelector((state => state.moviesData))
    const trailer = movieVideos.find(obj => obj.type === "Trailer")
    let key = trailer ? trailer.key : null;

    return (
        <>
        { 
            selectedMovie 
            ?   <div className={st.movieTable}>
                    <div className={st.posterDiv}>
                        <img src={`https://image.tmdb.org/t/p/original${selectedMovie.poster_path}`} />
                    </div>
                    
                    <div className={st.movieInfo}>
                        <h2>{selectedMovie.title}</h2>
                        <div className={st.info}>
                            <p>Language: {selectedMovie.original_language}</p>
                            <p>Date: {selectedMovie.release_date}</p>
                            <p>Rating: {selectedMovie.vote_average.toFixed(1)}
                                <BsStarFill className={st.star}/>
                            </p>
                            <p>Rating Count: {selectedMovie.vote_count}</p>
                            <p>Adult: {selectedMovie.adult === false ? "No" : "Yes"}</p>
                        </div>

                        <h3>Overview</h3>
                        <p>{selectedMovie.overview}</p>
                        
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
            : <p>Movie not found</p>     
        }
        </>
    )
}

export default MovieTable