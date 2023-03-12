import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { getPathNameTitle } from '../../libs/getPath';

import styles from '../../styles/components/Main.module.scss';

const Main = () => {
  const location = useLocation();

  const title = getPathNameTitle(location.pathname);
  return (
    <main className={styles['main-wrapper']}>
      <h1>{title}</h1>
      <Outlet />
    </main>
  );
};

export default Main;
