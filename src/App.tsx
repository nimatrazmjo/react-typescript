import React from 'react';
import logo from './logo.svg';
import './App.css';
import InviteList from './state/invite-list.component';
import SearchUser from './state/SearchUser.component';
import EventComponent from './events/EventComponent';

function App() {
  return (
    <div className="App">
      {/* <InviteList /> */}
      {/* <SearchUser /> */}
      <EventComponent />
    </div>
  );
}

export default App;
