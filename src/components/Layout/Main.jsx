import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { getPathNameTitle } from '../../libs/getPath';

import '../../styles/components/Main.scss';

const Main = () => {
  const location = useLocation();

  const title = getPathNameTitle(location.pathname);
  return (
    <main className="main-wrapper">
      <h1>{title}</h1>
      <Outlet />
    </main>
  );
};

export default Main;
