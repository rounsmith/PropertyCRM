import { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { MdOutlineLogout, MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import { BiCog } from 'react-icons/bi';
import { RxAvatar } from 'react-icons/rx';

import '../../styles/components/ProfileDropdown.scss';

const ProfileDropdown = ({ width }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="avatar-wrapper">
          <img src="/avatar-pic.png" className="avatar" alt="avatar" />
          {width > 992 && (
            <div className="profile-text">
              <span className="name">Hawkins Maru</span>
              <span className="company-position">Company Manager</span>
            </div>
          )}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="profile-dropdown" sideOffset={5}>
          <DropdownMenu.Item>
            <a title="editProfile" className="item">
              <RxAvatar size={20} className="icon" />
              <span>Edit profile</span>
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <a title="editProfile" className="item">
              <BiCog size={20} className="icon" />
              <span>Settings</span>
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <a title="editProfile" className="item">
              <MdOutlineLogout size={20} className="icon" />
              <span>Logout</span>
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <a title="editProfile" className="item">
              <MdDarkMode size={20} className="icon" />
              <span>Dark Mode</span>
            </a>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ProfileDropdown;
