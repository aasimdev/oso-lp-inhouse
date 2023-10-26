import React from "react";
import NavItem from "./MenuItem";

const navItemsData = [
  { title: "Search", url: "/search" },
  { title: "Chat", url: "/chat" },
  { title: "News", url: "/news" },
  { title: "Pricing", url: "/pricing" },
  { title: "Blog", url: "https://blog.oso.ai/" },
];
const Menu = ({ isOpen, onClose }) => {
  const sideMenuClasses = isOpen
    ? "fixed w-screen h-screen bg-white z-50 transform mt-[137px] sm:mt-[148px] top-0 visible opacity-100 transition-all duration-500"
    : "fixed w-screen h-screen bg-white z-50 transform mt-[137px] sm:mt-[148px] -top-3 invisible opacity-0 transition-all duration-500";
  return (
    <div className={sideMenuClasses}>
      <div className="px-6 mx-auto max-w-6xl">
        <div className="md:mt-4">
          {navItemsData.map((item) => (
            <NavItem
              key={item.url}
              item={item.title}
              url={item.url}
              onClose={onClose}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
