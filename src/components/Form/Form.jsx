import {useState}from 'react';
import validation from './validation/validation.jsx';
const Form = () => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({email:" ", password:"" });
    const handleChange = (event) => {
       setUserData({
        ...userData,
        [event.target.name]:event.target.value
       })
       setErrors(validation({...userData,
         [event.target.name]: event.target.value 
        }))
        
    }
    
    
    
    
    return (
    <form>
            <label htmlFor="email">Email: </label>
            <input type="email"name ="email" value={userData.email} onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>}
               
            <label htmlFor="password">Password: </label>
            <input type="text" name = 'password' value={userData.password} onChange={handleChange}/>
            {errors.password && <p>{errors.password}</p>}
            <button>Submit</button>
    </form>
  );

}

export default Form;