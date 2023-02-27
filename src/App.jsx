import React from 'react';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import SideBar from './components/Layout/SideBar';

function App() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <Main />
      </div>
    </>
  );
}

export default App;
