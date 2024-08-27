import { Calendar, User2Icon } from "lucide-react";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: any }) => {
  return (
    <div className=" group bg-accent/30  rounded-lg text-text">
      <div className=" w-full overflow-hidden p-2">
        <img
          className=" w-full transition-all  group-hover:scale-125 aspect-video object-cover rounded-xl"
          src={blog.image}
          alt={blog.title}
        />
      </div>
      <div className="  p-4">
        <div className=" flex  items-center gap-3 ">
          <div className="text-sm flex items-center gap-1 ">
            <User2Icon size={20} />
            <span className=" ml-2">{blog.author}</span>
          </div>
          <div className=" flex items-center gap-1 ">
            <Calendar size={20} />
            <span className="text-sm ml-2">{blog.date}</span>
          </div>
        </div>

        <div className=" line-clamp-1 mt-3  flex items-center gap-5">
          <h1 className=" text-lg line-clamp-1 font-bold">{blog.title}</h1>
        </div>
        <p className=" line-clamp-2 text-sm mt-3">{blog.description}</p>
        <div>
          <Link href={`/blogs/${blog.slug}`}>
            <span className=" mt-5 block font-semibold text-primary">
              Read more
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
