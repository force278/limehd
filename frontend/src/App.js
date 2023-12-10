import './App.css';
import LeftBoxItem from './components/LeftBoxItem.js';
import {useEffect, useState} from 'react';
import TableItem from './components/TableItem.js';
import axios from 'axios'
import Modal from './components/Modal.js';

function App() {
  const [leftBoxAcviteItemState, setLeftBoxActiveItemState] = useState(0);
  const leftBoxItems = ['PlayList', 'Admin Users'];
  const [listTableItemsState, setListTableItemsState] = useState(null);
  const [activeTableItemState, setActiveTableItemState] = useState(null);
  const [modalState, setModalState] = useState(false);

  
  useEffect( ()=>{
    if (leftBoxAcviteItemState === 0) {
      axios.get('http://localhost:8000/api/channel/')
      .then(response => {setListTableItemsState(response.data)})
      .catch(error => {setActiveTableItemState([])})
    } else if (leftBoxAcviteItemState === 1) {
      axios.get('http://localhost:8000/api/admin_users/')
      .then(response => {console.log(response.data)})
      .catch(error => {console.log(error)})
    }

  }, [leftBoxAcviteItemState])

  return (
    <div >
      <header className='headerStyle'>
        <img src='logo192.png' alt='logo' className='logoStyle'></img>
        <h2 className='headerTextStyle'>{'Панель управления'}</h2>
      </header>
      <div className='centerBox'>
        <div className='leftBoxStyle'>
          {
            leftBoxItems.map((item, index)=>(
              leftBoxAcviteItemState === index ?
                <LeftBoxItem key={index} index={index} name={item} active={true} setLeftBoxActiveItemState={setLeftBoxActiveItemState} />
              : <LeftBoxItem key={index} index={index} name={item} active={false} setLeftBoxActiveItemState={setLeftBoxActiveItemState} />
            ))
          }
        </div>
        <div className='rightBoxStyle'>
          <img className='addLogoStyle' src='addLogo.png' alt='addLogo'></img>
          <div className='tableStyle'>
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
      <Modal activeTableItemState={activeTableItemState} modalState={modalState} setModalState={setModalState} />
    </div>
  );
}

export default App;
