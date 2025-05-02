import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import st from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={st.nav}>
        <div className={st.navContainer}>
            <NavLink to='/'>
                <div className={st.logoDiv}>
                    <img src={logo} className={st.logo}/>
                    <span className={st.name}>POPCORN</span>
                </div>
            </NavLink>

            <div className={st.navMenu}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/Movies'>Movies</NavLink>
                <NavLink to='/Actors'>Actors</NavLink>
            </div>

            <div></div>
        </div>
    </nav>
  )
}

export default Navigation