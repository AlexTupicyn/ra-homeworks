import React from 'react';
import Dropdown from './components/Dropdown';
import './App.css';

function App() {
  const accountItems = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out'
  ];

  return (
    <div className="App">
      <h1>ACCOUNT SETTINGS</h1>
      <div className="dropdown-wrapper">
        <Dropdown items={accountItems} />
      </div>
    </div>
  );
}

export default App;
