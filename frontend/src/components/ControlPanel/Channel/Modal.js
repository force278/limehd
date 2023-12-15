import styles from './Modal.module.css'
import axios from 'axios'
import {useEffect, useRef, useState} from 'react'

function Modal({ tokenState, activeTableItemState, setActiveTableItemState, listTableItemsState, setListTableItemsState, modalState, setModalState}) {
    const [enableSaveBtnState, setEnableSaveBtnState] =  useState(true);
    const nameRef = useRef();
    const urlRef = useRef();
    const iconRef = useRef();
    const streamRef = useRef();

    useEffect(()=>{
        if (modalState) {
            axios.get(`http://localhost:8000/api/channel/${listTableItemsState[activeTableItemState].id}`)
            .then(response => {
                nameRef.current.value = response.data.name;
                urlRef.current.value = response.data.url;
                iconRef.current.value = response.data.icon;
                streamRef.current.value = response.data.stream;
            })
        }
    }, [modalState, activeTableItemState, listTableItemsState])

    function save_table_item() {
        axios.put(`http://localhost:8000/api/channel/${listTableItemsState[activeTableItemState].id}/`, 
        {
            'name': nameRef.current.value,
            'url': urlRef.current.value,
            'icon':iconRef.current.value,
            'stream': streamRef.current.value
        }, {
            headers: {
                'Authorization': `Token ${tokenState}`
            }
        })
        .then(response => {
            if (response.data) {
                setEnableSaveBtnState(false)
            }
        })
        let tempList = [...listTableItemsState] 
        tempList[activeTableItemState] = {
            'id': tempList[activeTableItemState].id,
            'name': nameRef.current.value,
            'url': urlRef.current.value,
            'icon':iconRef.current.value,
            'stream': streamRef.current.value
        }
        setListTableItemsState(tempList)
    }

    function delete_table_item() {
        axios.delete(`http://localhost:8000/api/channel/${listTableItemsState[activeTableItemState].id}/`, {
                headers: {
                    'Authorization': `Token ${tokenState}`
                }
            })
            let tempList = [...listTableItemsState] 
            tempList.splice(activeTableItemState, 1)
            setActiveTableItemState(null)
            setListTableItemsState(tempList)
            setEnableSaveBtnState(false)
            setModalState(false)
    }

    return (
        <div className={styles.modalStyle}>
            <div className={styles.formStyle} >
                <img className={styles.closeBtnStyle} src='deleteLogo.png' alt='deleteLogo' onClick={() => {
                    setEnableSaveBtnState(true)
                    setModalState(false)
                }}></img>
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
                        <button className={styles.saveDisableBtnStyle} onClick={save_table_item}>{'Сохранено'}</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Modal