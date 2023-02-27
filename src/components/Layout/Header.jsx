import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import ProfileDropdown from '../common/ProfileDropdown';

import useWindowSize from '../../libs/windowSize';

import '../../styles/components/Header.scss';
import Notifications from '../common/Notifications';

const Header = () => {
  const { width, height } = useWindowSize();

  return (
    <header className="header-wrapper">
      <div className="header-left-section">
        {width > 991 ? (
          <>
            <img src="/logo.png" className="logo" alt="logo" />
            <div className="search-wrapper">
              <AiOutlineSearch size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search Property,Customer etc"
                className="search-input"
              />
            </div>
          </>
        ) : (
          <div className="mobile-menu">
            <GiHamburgerMenu size={26} className="menu-icon" />
            <AiOutlineSearch size={18} className="search-icon" />
          </div>
        )}
      </div>
      <div className="header-right-section">
        <Notifications height={height} />
        <ProfileDropdown width={width} />
      </div>
    </header>
  );
};

export default Header;
