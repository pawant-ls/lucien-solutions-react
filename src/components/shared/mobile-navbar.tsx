import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { X, Mail, Phone, ChevronDown, ChevronUp } from "lucide-react";
import Logo from "./logo";
import ThemeChanger from "./theme";
import CustomButton from "./button";
import { urls } from "@/data/url";
import { usePathname } from "next/navigation";

const NestedNavItem = ({
  item,
  level = 0,
  pathname,
  onClose,
}: {
  item: { name: string; url: string; children?: any[] };
  level?: number;
  pathname: string;
  onClose: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      style={{
        marginLeft: `${level * 0.4}rem`,
      }}
      className={`${
        pathname === item.url ? "text-primary font-semibold" : ""
      } `}
    >
      <div className="flex items-center justify-between">
        <Link href={item.url} onClick={onClose}>
          <span className={`block py-2 ${level > 0 ? `pl-${level * 4}` : ""}`}>
            {item.name}
          </span>
        </Link>
        {item.children && (
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        )}
      </div>
      {item.children && isOpen && (
        <ul className="ml-4">
          {item.children.map((child, index) => (
            <NestedNavItem
              key={index}
              item={child}
              level={level + 1}
              pathname={pathname}
              onClose={onClose}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const NestedNavigation = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}) => {
  const pathname = usePathname();
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isMenuOpen ? 0 : "100%" }}
      transition={{ duration: 0.5 }}
      className="z-[10000000] lg:hidden w-[370px] bg-background border-l border-text/10 fixed inset-y-0 right-0 p-5 text-gray-800 overflow-y-auto"
    >
      <div className="flex items-center justify-between">
        <div className="w-28">
          <Logo white={false} />
        </div>
        <div onClick={() => setIsMenuOpen(false)}>
          <X size={25} />
        </div>
      </div>
      <div className="mt-5">
        <ThemeChanger />
      </div>
      <nav className="mt-10">
        <ul className="text-text space-y-3">
          {urls.map((item, index) => (
            <NestedNavItem
              key={index}
              item={item}
              pathname={pathname}
              onClose={() => setIsMenuOpen(false)}
            />
          ))}
        </ul>
      </nav>
      <div className="my-5 w-full">
        <CustomButton size="sm" white={false}>
          Contact Us
        </CustomButton>
      </div>
      <div>
        <div className="text-text flex items-center gap-2">
          <Mail size={20} />
          <span>hello@luciensolutions.com</span>
        </div>
        <div className="text-text mt-3 flex items-center gap-2">
          <Phone size={20} />
          <span>+91 89287 23457</span>
        </div>
      </div>
    </motion.div>
  );
};

export default NestedNavigation;
