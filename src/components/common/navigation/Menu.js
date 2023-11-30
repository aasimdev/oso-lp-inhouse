import React from "react";
import NavItem from "./MenuItem";

const navItemsData = [
  { title: "Use Cases", url: "/resource" },
  { title: "Knowledgebase ", url: "https://learn.oso.ai/" },
  { title: "Search", url: "/search" },
  { title: "Chat", url: "/chat" },
  { title: "News", url: "/news" },
  { title: "Pricing", url: "/pricing" },
  { title: "Blog", url: "https://blog.oso.ai/" },
];
const Menu = ({ isOpen, onClose }) => {
  const sideMenuClasses = isOpen
    ? "absolute w-screen md:w-[calc(100vw_-_17px)] bg-white z-50 transform translate-y-0 visible opacity-100 transition-all duration-500 overflow-y-auto h-[calc(100vh_-_149px)] custom-scrollbar"
    : "absolute w-screen md:w-[calc(100vw_-_17px)] bg-white z-50 transform -translate-y-3 invisible opacity-0 transition-all duration-500 overflow-y-auto h-[calc(100vh_-_149px)] custom-scrollbar";
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
