import { useParams } from 'react-router-dom';
import { ActorTable } from '../../components';
import { useAppDispatch } from '../../store/hooks/hooks';
import { useEffect } from 'react';
import { getFullActorInfoThunk} from '../../store/slices/Actor/actorsThunks';

const AboutActor = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(getFullActorInfoThunk(Number(id)))
    }, [])

    return (
        <ActorTable />
    )
}

export default AboutActor