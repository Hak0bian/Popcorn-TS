import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { MovieTable } from "../../components";
import { useAppDispatch } from '../../store/hooks/hooks';
import { getMovieVideosThunk } from '../../store/slices/moviesSlices';

const AboutMovie = () => {
  const {id} = useParams();
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(getMovieVideosThunk(Number(id)))
  }, [])

  return (
    <MovieTable movieId={Number(id)}/>
  )
}

export default AboutMovie