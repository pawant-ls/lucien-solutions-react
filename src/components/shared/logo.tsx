import Link from "next/link";

const Logo = ({ white = true }: { white?: boolean }) => {
  return (
    <Link href="/" className=" w-full">
      <img
        src={
          white
            ? "/images/logo/lucien-solutions-white-logo.webp"
            : "/images/logo/lucien-Solutions-black-text.webp"
        }
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
