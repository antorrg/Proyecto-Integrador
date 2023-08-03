import { NavLink } from "react-router-dom";
const Error = () => {
    return(
        <div>
            <h1>Error, this is not a valid page, please go to Home Page</h1>
            <NavLink to="/">Go to Home</NavLink>    </div>
    )
    
}

export default Error;