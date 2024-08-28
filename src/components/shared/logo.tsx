import Link from "next/link";

const Logo = ({ white = true }: { white?: boolean }) => {
  return (
    <Link href="/" className=" w-full">
      <img
        className=" w-32 hidden dark:block"
        src={"/images/logo/lucien-solutions-white-logo.webp"}
        alt="logo"
      />
      <img
        className=" w-32 block dark:hidden"
        src={"/images/logo/lucien-Solutions-black-text.webp"}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
