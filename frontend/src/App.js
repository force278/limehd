import './App.css';
import LeftBoxItem from './components/LeftBoxItem.js';
import {useState} from 'react';

function App() {
  const [leftBoxAcviteItemState, setLeftBoxActiveItemState] = useState(0);
  const leftBoxItems = ['PlayList', 'Admin Users'];
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
                <LeftBoxItem key={index} name={item} active={true} />
              : <LeftBoxItem key={index} name={item} active={false} />
            ))
          }
        </div>
        <div className='rightBoxStyle'>
          {"Тут будет поиск, добавление и таблица каналов"}
        </div>
      </div>
    </div>
  );
}

export default App;
