"use client";
import { Search } from "lucide-react";
import Heading from "../shared/heading";
import MainBackground from "../shared/main-bg";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { blogPosts, categories } from "@/data/blogs";
import CustomButton from "../shared/button";
import BlogCard from "./card";
import { GradientMixer } from "../home/home";
export interface IBlog {
  id: number;
  title: string;
  description: string;
  content: string;
  author: {
    name: string;
    profile: any;
  };
  uploadedDate: string;
  blogId: string;
  image: any;
}
const BlogsPageComponent = ({
  data,
}: {
  data: {
    blogs: IBlog[];
  };
}) => {
  console.log(data);
  return (
    <MainBackground>
      <section className=" container">
        <Heading
          firstLine={["Latest", "Blogs/News"]}
          description="Here, we share latest Blog/News that inspire you"
        />

        <div>
          <div className="flex border rounded-full border-text/20  items-center  max-w-xl mx-auto">
            <Input
              className=" bg-background/10 text-text   border-none rounded-l-full"
              type="text"
            />
            <Button className=" text-text px-5 rounded-r-full">
              <Search size={20} />
            </Button>
          </div>
        </div>

        <div className=" mt-12 my-10 flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className=" border py-2 rounded-full border-text/20 cursor-pointer text-sm hover:bg-primary transition-all   px-4 "
            >
              {category.name}
            </div>
          ))}
        </div>
        <div className=" my-20 flex-col md:flex-row flex gap-10">
          <div>
            <img
              className=" max-w-sm rounded-lg"
              src="/images/influencer.webp"
              alt="influencer"
            />
          </div>
          <div className=" text-text">
            <h1 className=" text-2xl font-bold ">
              Importance Of Greenfluencers
            </h1>
            <h4 className=" text-lg font-semibold">June 15, 2024</h4>
            <p className="s mt-3">
              The influencer landscape is undergoing a significant shift, with
              environmental consciousness taking center stage. Recognizing that
              sustainable practices are no longer a luxury but a necessity, a
              new breed of influencer is emerging: the Green Influencer.This
              trend is fueled by a growing public demand for eco-friendly
              living. Studies show that 78%of people have been inspired by
              influencers to adopt more sustainable practices. Green influencers
              are acting as catalysts for change, empowering their audiences to
              make greener choices in their everyday
            </p>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
          {data?.blogs?.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </MainBackground>
  );
};

export default BlogsPageComponent;
