
import styles from '../../styles/login.module.scss';
import React, { useEffect, useState } from "react";
import useForm from "../../utils/useForm";


interface User {
    name: string;
    age: number;
    email: string;
    errors:any;
    password: string;
  }
  

const Login = () => {
    const [focusInput, setfocusInput] = useState("");
    const chageFocus = (e: any) => {
        console.log(e);
        setfocusInput(e);
    }
    const formLogin = () => {

        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
      }
   
    
    const { handleChange, values, errors, handleSubmit } = useForm(formLogin);

    return (
        <>
            <div className={styles.loginheading___container}>
                <span className={styles.login___heading}>Log in to make your account</span>
            </div>
            <div className={styles.login___Container}>
                <div className={styles.loginform___container}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.loginform___body}>
                            <label className={styles.login___labels}>EMAIL ADDRESS</label>
                            <input type="email" name="email" placeholder="E-mail" onChange={handleChange} onFocus={() => chageFocus("1")} className={focusInput === "1" ? styles.logininputafter___container : styles.logininput___container} />
                            {errors.email && <p className="error">{errors.email}</p>}
                            <label className={styles.login___labels}>PASSWORD</label>
                            <input type="password" name="password" placeholder="password" onChange={handleChange} onFocus={() => chageFocus("2")} className={focusInput === "2" ? styles.logininputafter___container : styles.logininput___container} />
                            {errors.password && <p>{errors.password}</p>  }
                        </div>
                        <div className={styles.loginbtn___container}>
                            <button type="submit" value="Submit" className={styles.login___btn}>LOG IN</button>
                        </div>
                    </form>
                </div>
                <div className={styles.sperator___container}>
                    <div className={styles.seperate___container}></div>
                    <div className={styles.or___container}>
                        OR
                    </div>
                </div>
                <div className={styles.socialbtn___container}>
                    Social Buttons
                </div>
            </div>
        </>
    )
}
export default Login;