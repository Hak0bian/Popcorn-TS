import { KnownFor } from "../index"
import { useAppSelector } from "../../store/hooks/hooks";
import profile from "../../assets/profile.jpg";
import st from "./ActorTable.module.css"

const ActorTable = () => {   
    const {selectedActor} = useAppSelector((state) => state.actorsData)

    return (
        <>
        {
            selectedActor
            ?   <div className={st.actorTable} key={selectedActor?.id}>
                    <div className={st.posterDiv}>
                        <img src={ selectedActor?.profile_path ? `https://image.tmdb.org/t/p/w500${selectedActor?.profile_path}` : profile }/>
                    </div>
        
                    <div className={st.actorInfo}>
                        <h2>{selectedActor?.name}</h2>
                        <p className={st.biography}>{selectedActor?.known_for?.[0]?.overview}</p>
        
                        <h3>Known For</h3>
                        {
                            selectedActor?.known_for?.map((movie) => {
                                return (
                                    <KnownFor movie={movie}/>
                                )
                            })
                        }
                    </div>
                </div>
            : <p>Actor not found !</p>
        }
        </>
    )
}

export default ActorTable