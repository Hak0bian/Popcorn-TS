import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { getActorsThunk } from "../../store/slices/Actor/actorsThunks";
import profile from "../../assets/profile.jpg";
import st from "./ActorCard.module.css";

const ActorCard = () => {
    const {actors, page} = useAppSelector((state => state.actorsData))
    const dispatch = useAppDispatch()    

    useEffect(() => {
        dispatch(getActorsThunk(page))
    }, [])

    return (
        <>
        {
            actors.map((actor) => (
                <NavLink to={`actor/${actor.id}`} key={actor.id}>
                    <div className={st.actorCard}>
                        <div>
                            <img src={ actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : profile }/>
                        </div>
                        <div className={st.titleDiv}>
                            <h3>{actor.name}</h3>
                        </div>
                    </div>
                </NavLink>
            ))
        }
        </>
    );
};

export default ActorCard;
