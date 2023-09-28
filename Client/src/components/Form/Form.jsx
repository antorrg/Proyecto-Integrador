import styles from './Form.module.css';
import {useState}from 'react';
import validation from '../validation/validation';
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
    <div className={styles.body}>
    <form onSubmit={handleSubmit} className={styles.text}>
            
            <label htmlFor="email">Email: </label>
            <input type="email"name ="email" value={userData.email} onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>}
               
            <label htmlFor="password">Password: </label>
            <input type="text" name = 'password' value={userData.password} onChange={handleChange}/>
            {errors.password && <p>{errors.password}</p>}
            <button>Submit</button>
            <hr></hr>
            <p>Proximamente también tendrá un SignIn.</p>
    </form>
    </div>
  );

}

export default Form;