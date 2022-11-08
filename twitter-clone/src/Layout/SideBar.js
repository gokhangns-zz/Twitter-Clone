import React, { useState } from 'react';
import SideLink from '../Components/SideLink';

import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
} from "../icons/Icon.js";

import TwitterLogo from '../img/TwitterLogo.svg';

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notification",
    icon: NotificationsIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "List",
    icon: ListsIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

const SideBar = () => {
  const [active, setActive] = useState("Home");
  const onMenuItemClick = (name) => {
    setActive(name);
  }
  return (
    <div className='flex flex-col justify-between w-72  px-2'>
      <div>
        <div className='mt-1 mb-4 ml-1 hover:bg-gray-lightest 
        flex items-center 
        justify-center
         w-12 h-12 
        rounded-full 
        transform transition-colors duration-200'>
          <img src={TwitterLogo} alt='Twitter Logo' className="w-9 h-9" />

        </div>
        <nav className="mb-4">
          <ul>
            {sideLinks.map(({ name, icon }) => (
              <SideLink
                key={name}
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}

              />
            ))}
          </ul>
        </nav>
        <button className='bg-primary-base
         text-white shadow-lg
          hover:bg-primary-dark 
          transform transition-colors duration-200 
          rounded-full py-3 px-8 w-11/12'>
          Tweet
        </button>

      </div>
      <div> Alt Taraf</div>


    </div>
  );
};

export default SideBar;