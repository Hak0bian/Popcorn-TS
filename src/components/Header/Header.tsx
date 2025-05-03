import img1 from "../../assets/1.png"
import img2 from "../../assets/2.jpg"
import img3 from "../../assets/3.jpg"
import img4 from "../../assets/4.jpg"
import st from "./Header.module.css"

const Header = () => {
  return (
    <section>
      <div className={st.headContainer}>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img4} />
        </div>
      </div>
    </section>
  )
}

export default Header