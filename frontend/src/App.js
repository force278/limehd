import style from './App.module.css';
import LeftBoxItem from './components/LeftBoxItem.js';
import {useEffect, useState} from 'react';
import TableItem from './components/TableItem.js';
import axios from 'axios'
import Modal from './components/Modal.js';
import AddModal from './components/AddModal.js';

function App() {
  const [leftBoxAcviteItemState, setLeftBoxActiveItemState] = useState(0);
  const leftBoxItems = ['PlayList', 'Admin Users'];
  const [listTableItemsState, setListTableItemsState] = useState(null);
  const [activeTableItemState, setActiveTableItemState] = useState(null);
  const [modalState, setModalState] = useState(false);
  const [addModalState, setAddModalState] = useState(false);

  
  useEffect( ()=>{
    if (leftBoxAcviteItemState === 0) {
      axios.get('http://localhost:8000/api/channel/')
      .then(response => {
        setListTableItemsState(response.data)
      })
      .catch(error => {setActiveTableItemState([])})
    } else if (leftBoxAcviteItemState === 1) {
      axios.get('http://localhost:8000/api/admin_users/')
      .then(response => {console.log(response.data)})
      .catch(error => {console.log(error)})
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
        <div className={style.rightBoxStyle}>
          <img className={style.addLogoStyle} src='addLogo.png' alt='addLogo' onClick={()=>{setAddModalState(true)}}></img>
          <div className={style.tableStyle}>
            {
              listTableItemsState?.map((item, index)=>(
                activeTableItemState === index ?
                <TableItem key={index} index={index} item={item} active={true} setActiveTableItemState={setActiveTableItemState} setModalState={setModalState} />
                :
                <TableItem key={index} index={index} item={item} active={false} setActiveTableItemState={setActiveTableItemState} setModalState={setModalState} />
              ))
            }
          </div>
        </div>
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
  );
}

export default App;
