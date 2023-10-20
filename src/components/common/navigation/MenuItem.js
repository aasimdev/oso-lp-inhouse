import Image from "next/image";
import Link from "next/link";
const NavItem = ({ item, url, onClose }) => {
  return (
    <Link
      href={url}
      onClick={onClose}
      target={item === "Blog" && "_blank"}
      rel="noopener noreferrer"
      className="flex items-center justify-between h-20 border-b border-gray-50 px-2 py-4"
    >
      <p className="text-secondary text-base font-normal leading-[22px] text-black">
        {item}
      </p>
      <p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
            fill="black"
          />
        </svg>
      </p>
    </Link>
  );
};

export default NavItem;
