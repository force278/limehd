import './App.css';
import LeftBoxItem from './components/LeftBoxItem.js';
import {useState} from 'react';
import TableItem from './components/TableItem.js';

function App() {
  const [leftBoxAcviteItemState, setLeftBoxActiveItemState] = useState(0);
  const leftBoxItems = ['PlayList', 'Admin Users'];
  const tableitems = [
    {'url':'rossia1', 'name':'Россия 1', 'icon':'https://assets-iptv2022.cdnvideo.ru/static/channel/115/logo_256_1655391177.png'},
    {'url':'ntv', 'name':'НТВ', 'icon':'https://assets-iptv2022.cdnvideo.ru/static/channel/10100/logo_256_1655385292.png'},
    {'url':'5kanal', 'name':'5 канал', 'icon':'https://assets-iptv2022.cdnvideo.ru/static/channel/3/logo_256_1683697968.png'}]
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
          <button className='addButtonStyle'>{'+'}</button>
          <div className='tableStyle'>
            {
              tableitems.map((item, index)=>(
                <TableItem key={index} item={item} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
