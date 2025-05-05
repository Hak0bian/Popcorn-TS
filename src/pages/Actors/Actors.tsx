import { useNavigate, useParams } from "react-router-dom";
import { ActorCard } from "../../components"
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks"
import st from "./Actors.module.css"
import { useEffect } from "react";
import { getActorsThunk } from "../../store/slices/Actor/actorsThunks";

const Actors = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(state => state.actorsData);
  const { page } = useParams();
  const currentPage = Number(page) || 1

  useEffect(() => {
    dispatch(getActorsThunk(currentPage));
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      const newPage = currentPage + 1;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !isLoading) {
        dispatch(getActorsThunk(newPage));
        navigate(`/Actors/page/${newPage}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, isLoading]);


  return (
    <section>
      <article className={st.actorsContainer}>
        <ActorCard />
      </article>
      {isLoading && <h2 className={st.loading}>Loading...</h2>}
    </section>
  )
}

export default Actors