"use client";
import useScrollHeader from "@/hooks/useScrollHeader";
import Logo from "./logo";
import CustomButton from "./button";
import { urls } from "@/data/url";
import { ChevronDown, Mail, MenuIcon, Phone, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeChanger from "./theme";
const Header = () => {
  const { isAtTop, isVisible } = useScrollHeader();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ${
  //   isVisible ? "top-0" : "-top-[100%]"
  // }
  return (
    <>
      <header
        className={`  z-[10000] transition-all   fixed inset-x-0 border-b py-2 lg:py-1  border-text/10  ${
          isAtTop
            ? "md:backdrop-blur-md  bg-background  text-text "
            : "  bg-background text-text  border-b"
        } `}
      >
        <div className="flex container items-center justify-between ">
          <div className=" w-32">
            <Logo white={false} />
          </div>

          <ModernNavigation urls={urls} />

          <div className=" lg:flex  items-center gap-4  hidden ">
            <CustomButton white={isAtTop ? true : false}>
              Contact Us
            </CustomButton>
            <ThemeChanger />
          </div>

          <div className=" flex  items-center gap-4 cursor-pointer lg:hidden">
            <MenuIcon onClick={() => setIsMenuOpen(true)} size={25} />
          </div>
        </div>
      </header>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.5 }}
        className=" z-[10000000] lg:hidden bg-background border-l border-text/10 fixed inset-y-0 right-0 p-5 text-gray-800 "
      >
        <div className=" flex items-center justify-between">
          <div className=" w-28">
            <Logo white={false} />
          </div>

          <div onClick={() => setIsMenuOpen(false)}>
            <X size={25} />
          </div>
        </div>
        <div className=" mt-5">
          <ThemeChanger />
        </div>
        <nav onClick={() => setIsMenuOpen(false)} className=" mt-10  ">
          <ul className=" text-text space-y-3 ">
            {urls.map((url, index) => (
              <li
                className={` ${
                  pathname == url.url && " text-primary font-semibold "
                }`}
                key={index}
              >
                <Link href={url.url}>{url.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="  my-5 w-full ">
          <CustomButton size="sm" white={false}>
            Contact Us
          </CustomButton>
        </div>

        <div>
          <div className=" text-text flex items-center gap-2 ">
            <Mail size={20} />
            <span>hello@luciensolutions.com</span>
          </div>
          <div className="text-text mt-3 flex items-center gap-2 ">
            <Phone size={20} />
            <span>+91 89287 23457</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const ModernNavigation = ({ urls }: { urls: any }) => {
  const pathname = usePathname();
  return (
    <nav className="hidden lg:block ">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-center space-x-1">
          {urls.map(
            (
              url: {
                name: string;
                url: string;
                children?: {
                  name: string;
                  url: string;
                  children?: {
                    name: string;
                    url: string;
                  }[];
                }[];
              },
              index: number
            ) => (
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                key={index}
                className="group relative"
              >
                <Link
                  href={url.url}
                  className={`flex items-center font-medium px-4 py-6  hover:text-primary transition-colors duration-300 ${
                    pathname == url.url && " text-primary font-semibold"
                  } `}
                >
                  <span>{url.name}</span>
                  {url?.children && (
                    <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>
                {url?.children && (
                  <ul className="absolute left-0 mt-1 w-48  bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    {url.children.map((child, childIndex) => (
                      <li key={childIndex} className="group/child relative">
                        <a
                          href={child.url}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
                        >
                          <span>{child.name}</span>
                          {child?.children && (
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-transform duration-300 group-hover/child:rotate-[-90deg]" />
                          )}
                        </a>
                        {child?.children && (
                          <ul className="absolute left-full top-0 w-48  bg-white shadow-lg opacity-0 invisible group-hover/child:opacity-100 group-hover/child:visible transition-all duration-300 ease-in-out">
                            {child.children.map((subChild, subChildIndex) => (
                              <li key={subChildIndex}>
                                <a
                                  href={subChild.url}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
                                >
                                  {subChild.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Header;
