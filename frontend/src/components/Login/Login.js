import { useRef } from "react";
import styles from './Login.module.css'
import axios from "axios";

function Login({setTokenState}) {
    const usernameRef = useRef();
    const passwordRef = useRef();

    function login() {
        axios.post(`http://localhost:8000/auth/token/login/`, {
            'username': usernameRef.current.value,
            'password': passwordRef.current.value
        }).then(response=>{setTokenState(response.data.auth_token)})
    }

    return (
        <div className={styles.modalStyle}>
            <div className={styles.formStyle} >
                <p className={styles.inputText}>{'Username'}</p>
                <input className={styles.inputStyle} ref={usernameRef}></input>
                <p className={styles.inputText}>{'Password'}</p>
                <input className={styles.inputStyle} ref={passwordRef}></input>
                <div className={styles.btnBox}>
                    <button className={styles.LoginBtnStyle} onClick={login}>{'Войти'}</button>
                </div>
            </div>
        </div>
    )
}

export default Login;