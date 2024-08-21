import { testimonials } from "@/data/home";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useState } from "react";

const ClientTestimonials = () => {
  return (
    <Carousel className="w-[85%] lg:w-full mx-auto   ">
      <CarouselContent className=" h-full">
        {testimonials.map((testimonial, index) => {
          const [viewMore, setViewMore] = useState(false);

          return (
            <CarouselItem className="   sm:basis-1/2  lg:basis-1/3" key={index}>
              <div
                key={index}
                className=" bg-black/40 p-4   rounded-2xl text-white"
              >
                <div className=" ">
                  <div className="flex items-center gap-5 p-5 bg-white rounded-xl text-black">
                    <img
                      className=" w-20 rounded-full border"
                      src={testimonial.logo}
                      alt=""
                    />
                    <h1 className="  font-semibold">{testimonial.company}</h1>
                  </div>
                </div>
                <p className={`mt-4 ${!viewMore && "line-clamp-2"}  text-sm`}>
                  {testimonial.testimonial}
                </p>
                <span
                  onClick={() => setViewMore(!viewMore)}
                  className=" text-sm hover:underline cursor-pointer  text-primary font-medium"
                >
                  {viewMore ? "See Less" : "View More"}
                </span>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ClientTestimonials;
