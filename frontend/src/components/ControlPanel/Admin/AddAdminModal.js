import styles from './AddAdminModal.module.css';
import {useRef} from 'react';
import axios from 'axios';

function AddAdminModal({tokenState, listAdminState, setListAdminState, addAdminModalState, setAddAdminModalState}) {
    const usernameRef = useRef();
    const passwordRef = useRef();


    function addItem() {
        axios.post(`http://127.0.0.1:8000/api/admin_users/`,
        {
            'username': usernameRef.current.value,
            'password': passwordRef.current.value
        }, {
            headers: {
                'Authorization': `Token ${tokenState}`
            }
        }).then(response=>{
            let tempList = [...listAdminState, {
                'id': response.data.id,
                'username': usernameRef.current.value,
                'password': passwordRef.current.value
            }] 
            setListAdminState(tempList)
            setAddAdminModalState(false)
        }).catch(error=>{
            alert('Ошибка, чекни network')
        })
        
    }

    return (
        <div className={styles.modalStyle}>
            <div className={styles.formStyle} >
                <img className={styles.closeBtnStyle} src='deleteLogo.png' alt='deleteLogo' onClick={() => {setAddAdminModalState(false)}}></img>
                <p className={styles.inputText}>{'Username'}</p>
                <input className={styles.inputStyle} ref={usernameRef}></input>
                <p className={styles.inputText}>{'Password'}</p>
                <input className={styles.inputStyle} ref={passwordRef}></input>
                <div className={styles.btnBox}>
                    <button className={styles.cancelBtnStyle} onClick={()=>{setAddAdminModalState(false)}}>{'Отмена'}</button>
                    <button className={styles.addBtnStyle} onClick={addItem}>{'Создать'}</button>
                </div>
            </div>
        </div>
    )
}

export default AddAdminModal;