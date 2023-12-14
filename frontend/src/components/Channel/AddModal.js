import styles from './AddModal.module.css';
import {useRef} from 'react';
import axios from 'axios';

function AddModal({listTableItemsState, setListTableItemsState, addModalState, setAddModalState}) {
    const nameRef = useRef();
    const urlRef = useRef();
    const iconRef = useRef();
    const streamRef = useRef();

    function addItem() {
        axios.post(`http://localhost:8000/api/channel/`, 
        {
            'name': nameRef.current.value,
            'url': urlRef.current.value,
            'icon':iconRef.current.value,
            'stream': streamRef.current.value
        }, {
            headers: {
                'Authorization': 'Token 3f9507410a659c714130bb2d9b4fa941c12888c5'
            }
        }).then(response=>{
            let tempList = [...listTableItemsState, {
                'id': response.data.id,
                'name': nameRef.current.value,
                'url': urlRef.current.value,
                'icon':iconRef.current.value,
                'stream': streamRef.current.value
            }] 
            setListTableItemsState(tempList)
        }).catch(error=>{
            alert('Заполните все поля')
        })
        
    }

    return (
        <div className={styles.modalStyle}>
            <div className={styles.formStyle} >
                <img className={styles.closeBtnStyle} src='deleteLogo.png' alt='deleteLogo' onClick={() => {setAddModalState(false)}}></img>
                <p className={styles.inputText}>{'Имя'}</p>
                <input className={styles.inputStyle} ref={nameRef}></input>
                <p className={styles.inputText}>{'Url'}</p>
                <input className={styles.inputStyle} ref={urlRef}></input>
                <p className={styles.inputText}>{'Иконка'}</p>
                <input className={styles.inputStyle} ref={iconRef}></input>
                <p className={styles.inputText}>{'Ссылка'}</p>
                <input className={styles.inputStyle} ref={streamRef}></input>
                <div className={styles.btnBox}>
                    <button className={styles.cancelBtnStyle} onClick={()=>{setAddModalState(false)}}>{'Отмена'}</button>
                    <button className={styles.addBtnStyle} onClick={addItem}>{'Создать'}</button>
                </div>
            </div>
        </div>
    )
}

export default AddModal;