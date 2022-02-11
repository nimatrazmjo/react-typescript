import React from 'react';
import logo from './logo.svg';
import './App.css';
import InviteList from './state/invite-list.component';
import SearchUser from './state/SearchUser.component';
import EventComponent from './events/EventComponent';
import SearchName from './class/SearchName';
import USERS from './state/User.data';

function App() {
  return (
    <div className="App">
      {/* <InviteList /> */}
      {/* <SearchUser /> */}
      {/* <EventComponent /> */}
      <SearchName users={USERS} />
    </div>
  );
}

export default App;
