import { ActorCard, Pagination } from "../../components"
import { useAppSelector } from "../../store/hooks/hooks"
import st from "./Actors.module.css"

const Actors = () => {
  const {totalPages} = useAppSelector((state => state.actorsData))

  return (
    <section>
      <article className={st.actorsContainer}>
          <ActorCard />
      </article>
      <Pagination totalPages={totalPages}/>
    </section>
  )
}

export default Actors