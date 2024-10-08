import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const LogoCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className="flex h-32  dark:aspect-square aspect-video bg-text dark:bg-transparent rounded-xl  items-center justify-center ">
      <img className="w-32  h-32" src={img} alt={name} />
    </div>
  );
};

const clientLogos = [
  {
    img: "/images/client-logos/1.png",
    name: "Sigularury Legal",
  },
  {
    img: "/images/client-logos/2.webp",
    name: "DG Attorneys",
  },
  {
    img: "/images/client-logos/3.png",
    name: "Kingsley Law",
  },
  {
    img: "/images/client-logos/4.png",
    name: "Morrison Law",
  },
  {
    img: "/images/client-logos/5.png",
    name: "Morrison Law",
  },
  {
    img: "/images/client-logos/6.png",
    name: "Morrison Law",
  },
];

export function ClientMarquee() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden    ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {clientLogos.map((logo) => (
          <LogoCard key={logo.img} img={logo.img} name={logo.name} />
        ))}
      </Marquee>
    </div>
  );
}
