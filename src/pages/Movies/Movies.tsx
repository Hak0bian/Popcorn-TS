import { Pagination } from '../../components'
import MovieCard from '../../components/MovieCard/MovieCard'
import st from "./Movies.module.css"

const Movies = () => {
    return (
        <section>
            <article className={st.movieContainer}>
                <MovieCard/>
            </article>
            <Pagination/>
        </section>
    )
}

export default Movies