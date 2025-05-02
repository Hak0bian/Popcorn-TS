import MovieCard from '../../components/MovieCard/MovieCard'
import st from "./Movies.module.css"

const Movies = () => {
    return (
        <section className={st.movieContainer}>
            <MovieCard/>
        </section>
    )
}

export default Movies