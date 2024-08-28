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
                className=" bg-background border border-text/10 p-4   rounded-2xl text-text"
              >
                <div className=" ">
                  <div className="flex items-center gap-5 p-5 bg-accent/50 rounded-xl text-text">
                    <img
                      className=" w-20 rounded-full "
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

      <CarouselPrevious className=" border-white text-white" />
      <CarouselNext className=" border-white text-white" />
    </Carousel>
  );
};

export default ClientTestimonials;
