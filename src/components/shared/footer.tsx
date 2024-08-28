"use client";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Logo from "./logo";
import { policies, urls } from "@/data/url";
import { Mail, Phone } from "lucide-react";
import ThemeChanger from "./theme";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" border-t border-text/10  bg-background  py-10 text-text ">
      <section className=" container">
        <div className=" grid lg:grid-cols-2 gap-5">
          <div className=" grid gap-5">
            <div className=" w-32">
              <Logo />
            </div>

            <p>
              At Lucien Solutions, we believe in personalised strategies
              tailored to your unique needs. By combining creativity with
              data-driven insights, we craft campaigns
            </p>

            <div className=" flex gap-3">
              <IconBrandFacebook size={25} />
              <IconBrandInstagram size={25} />
              <IconBrandTwitter size={25} />
              <IconBrandYoutube size={25} />
            </div>
          </div>

          <div className=" lg:pl-10 mt-10 lg:mt-0 lg:border-l border-text/10 font-medium grid gap-10 lg:text-right">
            <div>
              <ul className="  lg:justify-end gap-5 flex flex-wrap">
                {urls.map((url, index) => (
                  <Link href={url.url} key={index}>
                    {url.name}
                  </Link>
                ))}
              </ul>
            </div>

            <div>
              <h3 className=" text-2xl font-semibold">Contact</h3>
              <div className=" mt-3 flex-col flex justify-start  md:flex-row lg:justify-end sm:items-center gap-3">
                <div className=" flex items-center gap-2 ">
                  <Phone size={20} />
                  <span>+91 6376857793</span>
                </div>
                <div className=" flex items-center gap-2 ">
                  <Mail size={20} />
                  <span>hello@luciensolutions.com</span>
                </div>
              </div>
            </div>

            <div>
              <ul className="  lg:justify-end gap-5 flex flex-wrap">
                {policies.map((url, index) => (
                  <Link href={url.url} key={index}>
                    {url.name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
