import { IoCalendar } from 'react-icons/io5'
import { IMoviesType } from '../../store/types/types'
import { BsStarFill } from 'react-icons/bs'
import st from "./KnownFor.module.css"

const KnownFor = ({movie} : {movie: IMoviesType}) => {

    console.log(movie);
    
    return (
        <div className={st.box}>
            <div className={st.imageDiv}>
                <img src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} />
            </div>
            
            <div className={st.titleDiv}>
                <h4>{movie?.title}</h4>
                <p><IoCalendar className={st.date}/>
                    {movie?.release_date}
                </p>
                <p><BsStarFill className={st.star}/>
                    {movie?.vote_average.toFixed(1)}
                </p>
                <p>Language: {movie?.original_language}</p>
            </div>
        </div>
    )
}

export default KnownFor