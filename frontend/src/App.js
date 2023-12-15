import { useState } from 'react';
//import ControlPanel from './components/ControlPanel/ControlPanel.js';
//import Login from './components/Login/Login.js';
import Main from './components/Main/Main.js';
import { Route, Routes } from "react-router-dom"


function App() {
  const [tokenState, setTokenState] = useState(localStorage.getItem('token'));

  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>

//    <div>
//      {
//        tokenState ?
//        <ControlPanel tokenState={tokenState} setTokenState={setTokenState} />
//        :
//        <Login setTokenState={setTokenState} />
//      }
//    </div>
  );
}

export default App;
