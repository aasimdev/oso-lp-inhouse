import React from "react";
import NavItem from "./MenuItem";

const navItemsData = [
  // { title: "How People Use OSO", url: "/resource", target: "_self" },
  { title: "Knowledgebase ", url: "https://learn.oso.ai/", target: "_blank" },
  { title: "Search", url: "/search", target: "_self" },
  { title: "Chat", url: "/chat", target: "_self" },
  { title: "News", url: "/news", target: "_self" },
  { title: "Pricing", url: "/pricing", target: "_self" },
  { title: "Blog", url: "https://blog.oso.ai/", target: "_blank" },
];
const Menu = ({ isOpen, onClose }) => {
  const sideMenuClasses = isOpen
    ? "absolute w-screen md:w-[calc(100vw_-_17px)] bg-white z-50 transform translate-y-0 visible opacity-100 transition-all duration-500 overflow-y-auto h-[calc(100vh_-_141px)] custom-scrollbar"
    : "absolute w-screen md:w-[calc(100vw_-_17px)] bg-white z-50 transform -translate-y-3 invisible opacity-0 transition-all duration-500 overflow-y-auto h-[calc(100vh_-_141px)] custom-scrollbar";
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
              target={item.target}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
