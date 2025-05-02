import { Pagination } from '../../components'
import { useAppSelector } from '../../store/hooks/hooks'
import MovieCard from '../../components/MovieCard/MovieCard'
import st from "./Movies.module.css"

const Movies = () => {
    const {totalPages} = useAppSelector((state => state.moviesData))

    return (
        <section>
            <article className={st.movieContainer}>
                <MovieCard/>
            </article>
            <Pagination totalPages={totalPages}/>
        </section>
    )
}

export default Movies