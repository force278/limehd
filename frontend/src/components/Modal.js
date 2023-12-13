import styles from './Modal.module.css'
import axios from 'axios'
import {useEffect, useRef, useState} from 'react'

function Modal({ activeTableItemState, setActiveTableItemState, listTableItemsState, setListTableItemsState, modalState, setModalState}) {
    const [enableSaveBtnState, setEnableSaveBtnState] =  useState(true);
    const nameRef = useRef();
    const urlRef = useRef();
    const iconRef = useRef();
    const streamRef = useRef();

    useEffect(()=>{
        if (modalState) {
            axios.get(`http://localhost:8000/api/channel/${activeTableItemState + 1}`)
            .then(response => {
                nameRef.current.value = response.data.name;
                urlRef.current.value = response.data.url;
                iconRef.current.value = response.data.icon;
                streamRef.current.value = response.data.stream;
            })
        }
    }, [modalState, activeTableItemState])

    function save_table_item() {
        if (enableSaveBtnState) {
            axios.put(`http://localhost:8000/api/channel/${activeTableItemState + 1}/`, 
            {
                'name': nameRef.current.value,
                'url': urlRef.current.value,
                'icon':iconRef.current.value,
                'stream': streamRef.current.value
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
            let tempList = [...listTableItemsState] 
            tempList[activeTableItemState] = {
                'name': nameRef.current.value,
                'url': urlRef.current.value,
                'icon':iconRef.current.value,
                'stream': streamRef.current.value
            }
            setListTableItemsState(tempList)
        }
    }

    function delete_table_item() {
        axios.delete(`http://localhost:8000/api/channel/${activeTableItemState + 1}/`, {
                headers: {
                    'Authorization': 'Token 3f9507410a659c714130bb2d9b4fa941c12888c5'
                }
            })
            let tempList = [...listTableItemsState] 
            tempList.splice(activeTableItemState, activeTableItemState)
            console.log(tempList)
            setActiveTableItemState(null)
            setListTableItemsState(tempList)
            setEnableSaveBtnState(false)
            setModalState(false)
    }

    return (
        <div className={modalState ? styles.modalActiveStyle : styles.modalInactiveStyle}>
            {modalState ?
                <div className={styles.formStyle} >
                    <img className={styles.closeBtnStyle} src='deleteLogo.png' alt='deleteLogo' onClick={() => {setModalState(false)}}></img>
                    <p className={styles.inputText}>{'Имя'}</p>
                    <input className={styles.inputStyle} ref={nameRef}></input>
                    <p className={styles.inputText}>{'Url'}</p>
                    <input className={styles.inputStyle} ref={urlRef}></input>
                    <p className={styles.inputText}>{'Иконка'}</p>
                    <input className={styles.inputStyle} ref={iconRef}></input>
                    <p className={styles.inputText}>{'Ссылка'}</p>
                    <input className={styles.inputStyle} ref={streamRef}></input>
                    <div className={styles.btnBox}>
                        <button className={styles.deleteBtnStyle} onClick={delete_table_item}>{'Удалить'}</button>
                        {
                            enableSaveBtnState ? 
                            <button className={styles.saveEnableBtnStyle} onClick={save_table_item}>{'Сохранить'}</button>
                            :
                            <button className={styles.saveDisableBtnStyle}>{'Сохранено'}</button>
                        }
                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default Modal