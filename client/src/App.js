import React from 'react';
import "./App.css";
import Login from './components/login/Login.js'
import { useStateValue } from './components/contextApi/StateProvider.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Chat from './components/Chat/Chat.js';
import SideBar from './components/SideBar/SideBar.js';

 const App = () => {

  const [{user}] = useStateValue()

  // 1:20

  return (
    <div className='app'>
      {!user?
      <Login/>:
      <div className='app-body'>
        <Router>
          <SideBar/>
          <Routes>
          <Route path='/' element={ <Chat/> } />
          <Route path='/room/:roomId' element={ <Chat/> } />
          </Routes>
        </Router>
      </div>
      }
    </div>
  )
};

export default App ;



