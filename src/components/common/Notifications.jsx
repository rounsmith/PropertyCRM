import { useMemo, useRef } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { VscBell } from 'react-icons/vsc';
import { CiWallet } from 'react-icons/ci';
import { BiCog } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai';

import '../../styles/components/Notifications.scss';

const Notifications = ({ height }) => {
  const popoverRef = useRef();

  const popoverHeight = useMemo(
    () => (popoverRef.current ? popoverRef.current.height : 0),
    [height]
  );

  const notifications = [
    {
      icon: <CiWallet size={25} />,
      title: 'Payment Success',
      color: 'green',
      dscr: 'Your success an order payment from star sun appartment in the amount of $320',
      time: '10 minutes ago',
    },
    {
      icon: <BiCog size={25} />,
      title: 'Update Apps',
      color: 'blue',
      dscr: 'The Apps application has made updates to improve services',
      time: '10 minutes ago',
    },
    {
      icon: <AiOutlineCalendar size={25} />,
      title: 'Booking Success',
      color: 'red',
      dscr: 'You completed the order from star sun hotel and Appartment',
      time: '10 minutes ago',
    },
    {
      icon: <CiWallet size={25} />,
      title: 'Payment Success',
      color: 'green',
      dscr: 'Your success an order payment from star sun appartment in the amount of $320',
      time: '10 minutes ago',
    },
    {
      icon: <BiCog size={25} />,
      title: 'Update Apps',
      color: 'blue',
      dscr: 'The Apps application has made updates to improve services',
      time: '10 minutes ago',
    },
  ];

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="notifications" aria-label="notifications">
          <VscBell size={25} className="bell-icon" />
          <div className="red-icon" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className={`notifications-content`}
          sideOffset={5}
          ref={popoverRef}
        >
          {notifications.map((item) => (
            <button className="notification" key={item.title}>
              <div
                className={`notification-icon notification-icon-${item.color}`}
              >
                {item.icon}
              </div>
              <div className="notification-info">
                <span className="notification-title">{item.title}</span>
                <span className="notification-description">{item.dscr}</span>
                <span className="notification-time">{item.time}</span>
              </div>
            </button>
          ))}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default Notifications;
