import React from 'react';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import SideBar from './components/Layout/SideBar';
import useWindowSize from './libs/windowSize';

function App() {
  const { width } = useWindowSize();

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        {width > 991 && <SideBar />}
        <Main />
      </div>
    </>
  );
}

export default App;
