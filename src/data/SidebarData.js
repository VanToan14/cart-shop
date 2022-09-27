import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as FcIcons from "react-icons/fc";
  
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  // {
  //   title: "About",
  //   path: "/about",
  //   icon: <FcIcons.FcAbout />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  //   subNav: [
  //     {
  //       title: "Our Aim",
  //       path: "/about-us/aim",
  //       icon: <IoIcons.IoIosPaper />,
  //     },
  //     {
  //       title: "Our Vision",
  //       path: "/about-us/vision",
  //       icon: <IoIcons.IoIosPaper />,
  //     },
  //   ],
  // },
  {
    title: "Shop",
    path: "/Shop",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
  },
  // {
  //   title: "Events",
  //   path: "/events",
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  
  //   subNav: [
  //     {
  //       title: "Event 1",
  //       path: "/events/events1",
  //       icon: <IoIcons.IoIosPaper />,
  //     },
  //     {
  //       title: "Event 2",
  //       path: "/events/events2",
  //       icon: <IoIcons.IoIosPaper />,
  //     },
  //   ],
  // },

];