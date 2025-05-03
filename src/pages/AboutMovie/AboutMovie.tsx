import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { MovieTable } from "../../components";
import { useAppDispatch } from '../../store/hooks/hooks';
import { getMovieByIdThunk, getMovieVideosThunk } from '../../store/slices/Movies/movieThunks';

const AboutMovie = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(getMovieByIdThunk(Number(id)))
        dispatch(getMovieVideosThunk(Number(id)))
    }, [])

    return (
        <section style={{ minHeight: "90vh" }}>
            <MovieTable />
        </section>
    )
}

export default AboutMovie