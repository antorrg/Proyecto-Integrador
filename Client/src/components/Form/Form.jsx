import styles from './Form.module.css';
import {useState}from 'react';
import validation from '../validation/validation';
import { NavLink } from 'react-router-dom';


//Formulario para iniciar sesión
const Form = ({login}) => {
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
    
    const handleSubmit = (event) => {
      event.preventDefault();
      login(userData);
    }
    
    
    return (
    <div className={styles.container}>
    <form onSubmit={handleSubmit} className={styles.text}>
            <h5>Para ingresar debe tener una cuenta</h5>
            <label htmlFor="email">Email: </label>
            <input type="email"name ="email" value={userData.email} onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>}
               
            <label htmlFor="password">Password: </label>
            <input type="text" name = 'password' value={userData.password} onChange={handleChange}/>
            {errors.password && <p>{errors.password}</p>}
            <button>SignIn</button>
            <hr></hr>
            
            
            <hr></hr>
    </form>
    </div>
  );

}

export default Form;