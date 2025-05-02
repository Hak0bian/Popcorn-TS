import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getMoviesThunk } from '../../store/slices/sliceThunks';
import { NavLink } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { IoCalendar } from "react-icons/io5";
import st from "./MovieCard.module.css";

const MovieCard = () => {
    const {movies} = useAppSelector((state => state.moviesData))
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(getMoviesThunk())
    }, [])

    return (
        <>
        {
            movies.map((movie) => (
                <NavLink to={`movie/${movie.id}`} key={movie.id}>
                    <div className={st.movieCard}>
                        <div className={st.imgDiv}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
                        </div>
                        <div className={st.titleDiv}>
                            <h3>{movie.title}</h3>
                            <p><IoCalendar className={st.date}/>
                                {movie.release_date}
                            </p>
                            <p><BsStarFill className={st.star}/>
                                {movie.vote_average.toFixed(1)}
                            </p>
                        </div>
                    </div>
                </NavLink>
            ))
        }
        </>
    )
}

export default MovieCard