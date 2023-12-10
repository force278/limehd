import './Modal.css'


function Modal({ modalState, setModalState}) {

    return (
        <div className={modalState ? 'ModalActiveStyle' : 'ModalInactiveStyle'}>
            {modalState ?
                <div className={'FormStyle'} >
                    <img className={'CloseBtnStyle'} src='deleteLogo.png' alt='deleteLogo' onClick={() => {setModalState(false)}}></img>
                </div>
                : null
            }
        </div>
    )
}

export default Modal