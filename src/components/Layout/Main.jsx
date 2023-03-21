import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from '../../styles/components/Main.module.scss';

const Main = () => {
  return (
    <main className={styles['main-wrapper']}>
      <Outlet />
    </main>
  );
};

export default Main;
