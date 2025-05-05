import { NavLink, useNavigate } from "react-router-dom"
import logo from "../../assets/logo.png"
import st from "./Navigation.module.css"

const Navigation = () => {
    const navigate = useNavigate();  

    const goToTop = (PageName: string) => {
        navigate(`/${PageName}/page/1`);  
        window.scrollTo({ top: 0, behavior: 'smooth' });  
    }
    
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
                    <NavLink to='/Movies/page/1' onClick={() => goToTop("Movies")}>Movies</NavLink>
                    <NavLink to='/Actors/page/1' onClick={() => goToTop("Actors")}>Actors</NavLink>
                </div>

                <div></div>
            </div>
        </nav>
    )
}

export default Navigation