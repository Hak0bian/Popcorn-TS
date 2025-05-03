import { KnownFor } from "../index"
import { useAppSelector } from "../../store/hooks/hooks";
import profile from "../../assets/profile.jpg";
import st from "./ActorTable.module.css"

const ActorTable = () => {   
    const {selectedActor, isLoading} = useAppSelector((state) => state.actorsData)

    if (isLoading) {
        return <h3 className={st.loading}>Loading...</h3>;
    }
    if (!selectedActor) {
        return <h3 className={st.notFound}>Actor not found!</h3>;
    }
    
    return (
        <section className={st.actorSection}>
            <div className={st.actorTable} key={selectedActor?.id}>
                <div className={st.posterDiv}>
                    <img src={ selectedActor?.profile_path ? `https://image.tmdb.org/t/p/w500${selectedActor?.profile_path}` : profile }/>
                </div>
    
                <div className={st.actorInfo}>
                    <h2>{selectedActor?.name}</h2>
                    <p className={st.knownAS}>(
                        { selectedActor?.also_known_as?.map((names, ind) => ( <span key={ind}> {names}, </span>))} 
                    )</p>
                    <p className={st.biography}>{selectedActor?.biography}</p>
    
                    <h3>Known For</h3>
                    <div className={st.knownForBox}>
                        {
                            selectedActor.known_for.length > 0
                            ?   selectedActor.known_for.map((movie, ind) => {
                                    return (
                                        <KnownFor key={`${movie.id}-${ind}`} movie={movie}/>
                                    )
                                })
                            :   <p>Not known for any movies</p>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ActorTable