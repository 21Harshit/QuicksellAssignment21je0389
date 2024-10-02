
import './App.css';
// import Display from './icons_FEtask/Display.svg'
// import Countapp from './components/check';
// import Apt from './components/groupcheck';
import React, { useState} from 'react';

import StatusPage from './pages/status';
import Papp from './pages/priority';
import UsersPage from './pages/user';

function App() {
  const [page, setPage] = useState('home'); // State to manage which page to show

  const renderPage = () => {
    switch (page) {
      case 'status':
        return <StatusPage />;
      case 'users':
        return <UsersPage />;
      case 'priority':
        return <Papp/>;
      default:
        return <StatusPage/>;
    }
  };

  return (
    <div style={{backgroundColor:'#c4c4c4', height:'100vh'}} className="App">

<div style={{ textAlign: 'left'}}>
    <div style={{ marginBottom: '5px',marginTop:'10px',marginBottom:'10px', backgroundColor:'white'}}>
      <button onClick={() => setPage('status')} style={{ margin: '5px' }}>Display</button>
      <button onClick={() => setPage('users')} style={{ margin: '5px' }}>Users</button>
      <button onClick={() => setPage('priority')} style={{ margin: '5px' }}>Priority</button>
    </div>
    {renderPage()}
  </div>

    </div>
  );
}


export default App;
