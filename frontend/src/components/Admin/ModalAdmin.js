import styles from './ModalAdmin.module.css'
import axios from 'axios'
import {useEffect, useRef, useState} from 'react'

function ModalAdmin({ activeAdminState, setActiveAdminState, listAdminState, setListAdminState, modalAdminState, setModalAdminState}) {
    const [enableSaveBtnState, setEnableSaveBtnState] =  useState(true);
    const usernameRef = useRef();
    const passwordRef = useRef();

    useEffect(()=>{
        if (modalAdminState) {
            axios.get(`http://localhost:8000/api/admin_users/${listAdminState[activeAdminState].id}`,
            {headers: {
                'Authorization': 'Token 3f9507410a659c714130bb2d9b4fa941c12888c5'
            }})
            .then(response => {
                usernameRef.current.value = response.data.username;
                passwordRef.current.value = response.data.password;
            })
        }
    }, [modalAdminState, activeAdminState, listAdminState])

    function save_table_item() {
        axios.put(`http://localhost:8000/api/admin_users/${listAdminState[activeAdminState].id}/`, 
        {
            'username': usernameRef.current.value,
            'password': passwordRef.current.value
        }, {
            headers: {
                'Authorization': 'Token 3f9507410a659c714130bb2d9b4fa941c12888c5'
            }
        })
        .then(response => {
            if (response.data) {
                setEnableSaveBtnState(false)
            }
        })
        let tempList = [...listAdminState] 
        tempList[activeAdminState] = {
            'id': tempList[activeAdminState].id,
            'username': usernameRef.current.value,
            'password': passwordRef.current.value
        }
        setListAdminState(tempList)
    }

    function delete_table_item() {
        axios.delete(`http://localhost:8000/api/admin_users/${listAdminState[activeAdminState].id}/`, {
                headers: {
                    'Authorization': 'Token 3f9507410a659c714130bb2d9b4fa941c12888c5'
                }
            })
            let tempList = [...listAdminState] 
            tempList.splice(activeAdminState, 1)
            setActiveAdminState(null)
            setListAdminState(tempList)
            setEnableSaveBtnState(false)
            setModalAdminState(false)
    }

    return (
        <div className={styles.modalStyle}>
            <div className={styles.formStyle} >
                <img className={styles.closeBtnStyle} src='deleteLogo.png' alt='deleteLogo' onClick={() => {
                    setEnableSaveBtnState(true)
                    setModalAdminState(false)
                }}></img>
                <p className={styles.inputText}>{'Username'}</p>
                <input className={styles.inputStyle} ref={usernameRef}></input>
                <p className={styles.inputText}>{'Password'}</p>
                <input className={styles.inputStyle} ref={passwordRef}></input>
                <div className={styles.btnBox}>
                    <button className={styles.deleteBtnStyle} onClick={delete_table_item}>{'Удалить'}</button>
                    {
                        enableSaveBtnState ? 
                        <button className={styles.saveEnableBtnStyle} onClick={save_table_item}>{'Сохранить'}</button>
                        :
                        <button className={styles.saveDisableBtnStyle} onClick={save_table_item}>{'Сохранено'}</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ModalAdmin;