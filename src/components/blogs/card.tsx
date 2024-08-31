import { getImageUrl } from "@/utils/image";
import { Calendar, User2Icon } from "lucide-react";
import Link from "next/link";
import { IBlog } from "./blogs";

const BlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <div className=" group bg-background border border-text/10  rounded-lg text-text">
      <div className=" w-full overflow-hidden p-4">
        <img
          className=" w-full transition-all  group-hover:scale-125 aspect-video object-cover rounded-xl"
          src={getImageUrl(blog.image) as string}
          alt={blog.title}
        />
      </div>
      <div className="  p-4">
        <div className=" flex  items-center gap-3 ">
          <div className="text-sm flex items-center gap-1 ">
            <User2Icon size={20} />
            <span className=" ml-2">{blog?.author?.name}</span>
          </div>
          <div className=" flex items-center gap-1 ">
            <Calendar size={20} />
            <span className="text-sm ml-2">{blog.uploadedDate}</span>
          </div>
        </div>

        <div className=" line-clamp-1 mt-3  flex items-center gap-5">
          <h1 className=" text-lg line-clamp-1 font-bold">{blog.title}</h1>
        </div>
        <p className=" line-clamp-2 text-sm mt-3">{blog.description}</p>
        <div>
          <Link href={`/blogs/${blog.blogId}`}>
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
