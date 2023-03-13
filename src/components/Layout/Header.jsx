import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';

import useWindowSize from '../../libs/windowSize';
import ProfileDropdown from '../common/ProfileDropdown';
import Notifications from '../common/Notifications';
import {
  selectSidebarShown,
  setSideBarShow,
} from '../../store/reducers/globals';

import styles from '../../styles/components/Header.module.scss';

const Header = () => {
  const { width, height } = useWindowSize();
  const dispatch = useDispatch();
  const showSideBar = useSelector(selectSidebarShown);

  return (
    <header className={styles['header-wrapper']}>
      <div className={styles['header-left-section']}>
        {width > 991 ? (
          <>
            <img src="/logo.png" className={styles['logo']} alt="logo" />
            <div className={styles['search-wrapper']}>
              <AiOutlineSearch size={20} className={styles['search-icon']} />
              <input
                type="text"
                placeholder="Search Property,Customer etc"
                className={styles['search-input']}
              />
            </div>
          </>
        ) : (
          <div className={styles['mobile-menu']}>
            <GiHamburgerMenu
              size={26}
              className={styles['menu-icon']}
              onClick={() => dispatch(setSideBarShow(!showSideBar))}
            />
            <AiOutlineSearch size={18} className={styles['search-icon']} />
          </div>
        )}
      </div>
      <div className={styles['header-right-section']}>
        <Notifications height={height} />
        <ProfileDropdown width={width} />
      </div>
    </header>
  );
};

export default Header;
