import { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { MdOutlineLogout, MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import { BiCog } from 'react-icons/bi';
import { RxAvatar } from 'react-icons/rx';

import styles from '../../styles/components/ProfileDropdown.module.scss';

const ProfileDropdown = ({ width }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={styles['avatar-wrapper']}>
          <img
            src="/avatar-pic.png"
            className={styles['avatar']}
            alt="avatar"
          />
          {width > 992 && (
            <div className="profile-text">
              <span className={styles['name']}>Hawkins Maru</span>
              <span className={styles['company-position']}>
                Company Manager
              </span>
            </div>
          )}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={styles['profile-dropdown']}
          sideOffset={5}
        >
          <DropdownMenu.Item>
            <a title="editProfile" className={styles['item']}>
              <RxAvatar size={20} className={styles['icon']} />
              <span>Edit profile</span>
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <a title="editProfile" className={styles['item']}>
              <BiCog size={20} className={styles['icon']} />
              <span>Settings</span>
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <a title="editProfile" className={styles['item']}>
              <MdOutlineLogout size={20} className={styles['icon']} />
              <span>Logout</span>
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <a title="editProfile" className={styles['item']}>
              <MdDarkMode size={20} className={styles['icon']} />
              <span>Dark Mode</span>
            </a>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ProfileDropdown;
