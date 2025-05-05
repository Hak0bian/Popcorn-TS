import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { useEffect } from 'react';
import { getMoviesThunk } from '../../store/slices/Movies/movieThunks';
import { useParams, useNavigate } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard'
import st from "./Movies.module.css"

const Movies = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector(state => state.moviesData);
    const { page } = useParams(); 
    const currentPage = Number(page) || 1

    useEffect(() => {
        dispatch(getMoviesThunk(currentPage));
    }, [currentPage]);

    useEffect(() => {
        const handleScroll = () => {
            const newPage = currentPage + 1;
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !isLoading) {
                dispatch(getMoviesThunk(newPage));
                navigate(`/Movies/page/${newPage}`);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [page, isLoading]);

    return (
        <section>
            <article className={st.movieContainer}>
                <MovieCard />
            </article>
            {isLoading && <h2 className={st.loading}>Loading...</h2>}
        </section>
    )
}

export default Movies;
