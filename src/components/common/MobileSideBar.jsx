import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectSidebarShown,
  setSideBarShow,
} from '../../store/reducers/globals';

import SideBar from '../Layout/SideBar';

import styles from '../../styles/components/MobileSidebar.module.scss';

const MobileSideBar = () => {
  const activeSideBar = useSelector(selectSidebarShown);
  const dispatch = useDispatch();

  return (
    <Offcanvas
      show={activeSideBar}
      onHide={() => dispatch(setSideBarShow(false))}
    >
      <Offcanvas.Header className={styles['sidebar-header']} closeButton>
        <img src="/logo.png" className={styles['logo']} alt="logo" />
      </Offcanvas.Header>
      <Offcanvas.Body className={styles['body-wrapper']}>
        <SideBar
          mobileBar="true"
          closeSideBar={() => dispatch(setSideBarShow(false))}
        />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MobileSideBar;
