import { useParams } from 'react-router-dom';
import { ActorTable } from '../../components';
import { useAppDispatch } from '../../store/hooks/hooks';
import { useEffect } from 'react';
import { getActorByIdThunk } from '../../store/slices/Actor/actorsThunks';

const AboutActor = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(getActorByIdThunk(Number(id)))
    }, [])

    return (
        <ActorTable />
    )
}

export default AboutActor