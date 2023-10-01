import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import {NavLink,} from "react-router-dom";

const Nav = ({onSearch,setAccess}) => {
   const out = () => {
       setAccess=false;
       localStorage.clear();
       window.location.reload();    
   }

    return (
        <div className={styles.container}>
            <SearchBar onSearch={onSearch}/>

                <div className={styles.buttons}>
            <button>
                <NavLink to = "/About">ABOUT</NavLink>
                </button>
            <button>
                <NavLink to = "/home">HOME</NavLink>
                </button>
                <button onClick = {()=>out()}>
                    <NavLink to = "/">LOG OUT</NavLink>
                </button>
                <button>
                    <NavLink to = "/Favorites">FAVORITES</NavLink>
                </button>
                </div>
                    
        </div>
    )

}
export default Nav;