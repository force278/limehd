import style from './App.module.css';
import LeftBoxItem from './components/LeftBoxItem.js';
import {useEffect, useState} from 'react';
import ChannelItem from './components/Channel/ChannelItem.js';
import Modal from './components/Channel/Modal.js';
import AddModal from './components/Channel/AddModal.js';
import AdminItem from './components/Admin/AdminItem.js';
import ModalAdmin from './components/Admin/ModalAdmin.js';
import AddAdminModal from './components/Admin/AddAdminModal.js';
import axios from 'axios'

function App() {
  const leftBoxItems = ['PlayList', 'Admin Users'];
  const [leftBoxAcviteItemState, setLeftBoxActiveItemState] = useState(0);

  const [listTableItemsState, setListTableItemsState] = useState(null);
  const [activeTableItemState, setActiveTableItemState] = useState(null);
  const [modalState, setModalState] = useState(false);
  const [addModalState, setAddModalState] = useState(false);

  const [listAdminState, setListAdminState] = useState(null);
  const [activeAdminState, setActiveAdminState] = useState(null);
  const [modalAdminState, setModalAdminState] = useState(false);
  const [addAdminModalState, setAddAdminModalState] = useState(false);

  
  useEffect( ()=>{
    if (leftBoxAcviteItemState === 0) {
      axios.get('http://localhost:8000/api/channel/')
      .then(response => {
        setListTableItemsState(response.data)
      })
      .catch(error => {setActiveTableItemState([])})
    } else if (leftBoxAcviteItemState === 1) {
      axios.get('http://localhost:8000/api/admin_users/',
      {headers: {
        'Authorization': 'Token 3f9507410a659c714130bb2d9b4fa941c12888c5'
        }
      })
      .then((response)=>{
        setListAdminState(response.data)
      })
      .catch(error => {setListAdminState([])})
    }

  }, [leftBoxAcviteItemState])

  return (
    <div >
      <header className={style.headerStyle}>
        <img src='logo192.png' alt='logo' className={style.logoStyle}></img>
        <h2 className={style.headerTextStyle}>{'Панель управления'}</h2>
      </header>
      <div className={style.centerBox}>
        <div className={style.leftBoxStyle}>
          {
            leftBoxItems.map((item, index)=>(
              leftBoxAcviteItemState === index ?
                <LeftBoxItem key={index} index={index} name={item} active={true} setLeftBoxActiveItemState={setLeftBoxActiveItemState} />
                : 
                <LeftBoxItem key={index} index={index} name={item} active={false} setLeftBoxActiveItemState={setLeftBoxActiveItemState} />
            ))
          }
        </div>
        {
          leftBoxAcviteItemState === 0 ?
            <div className={style.rightBoxStyle}>
              <img className={style.addLogoStyle} src='addLogo.png' alt='addLogo' onClick={()=>{setAddModalState(true)}}></img>
              <div className={style.tableStyle}>
                {
                  listTableItemsState?.map((item, index)=>(
                    activeTableItemState === index ?
                    <ChannelItem key={index} index={index} item={item} active={true} setActiveTableItemState={setActiveTableItemState} setModalState={setModalState} />
                    :
                    <ChannelItem key={index} index={index} item={item} active={false} setActiveTableItemState={setActiveTableItemState} setModalState={setModalState} />
                  ))
                }
              </div>
              {
                (modalState && !addModalState) ?
                <Modal activeTableItemState={activeTableItemState} setActiveTableItemState={setActiveTableItemState} listTableItemsState={listTableItemsState} setListTableItemsState={setListTableItemsState} modalState={modalState} setModalState={setModalState} />
                :
                null
              }
              {
                (addModalState && !modalState) ?
                <AddModal listTableItemsState={listTableItemsState} setListTableItemsState={setListTableItemsState} addModalState={addModalState} setAddModalState={setAddModalState} />
                :
                null
              }
            </div>  
          :
            <div className={style.rightBoxStyle}> 
              <img className={style.addLogoStyle} src='addLogo.png' alt='addLogo' onClick={()=>{setAddAdminModalState(true)}}></img>
              <div className={style.tableStyle}>
                {
                  listAdminState?.map((item, index)=>(
                    activeTableItemState === index ?
                    <AdminItem key={index} index={index} item={item} active={true} setActiveAdminState={setActiveAdminState} setModalAdminState={setModalAdminState} />
                    :
                    <AdminItem key={index} index={index} item={item} active={false} setActiveAdminState={setActiveAdminState} setModalAdminState={setModalAdminState} />
                  ))
                }
              </div>
              {
                (modalAdminState && !addAdminModalState) ?
                <ModalAdmin activeAdminState={activeAdminState} setActiveAdminState={setActiveAdminState} listAdminState={listAdminState} setListAdminState={setListAdminState} modalAdminState={modalAdminState} setModalAdminState={setModalAdminState} />
                :
                null
              }
              {
                (!modalAdminState && addAdminModalState) ?
                <AddAdminModal listAdminState={listAdminState} setListAdminState={setListAdminState} addAdminModalState={addAdminModalState} setAddAdminModalState={setAddAdminModalState} />
                :
                null
              }
            </div>
        }
      </div>
    </div>
  );
}

export default App;
