import { blogsData, testimonials } from "@/data/home";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useState } from "react";
import BlogCard from "../blogs/card";
import { blogPosts } from "@/data/blogs";

const Blogs = () => {
  return (
    <Carousel className="w-[85%] lg:w-full mx-auto   ">
      <CarouselContent className=" h-full">
        {blogPosts.map((blog, index) => {
          return (
            <CarouselItem className="   sm:basis-1/2  lg:basis-1/3" key={index}>
              <BlogCard blog={blog} />
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Blogs;
