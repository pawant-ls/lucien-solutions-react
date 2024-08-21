import { whatTeamSays } from "@/data/career";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useState } from "react";
import { MagicCard } from "../magicui/magic-card";

const WhatOurEmlpoyeesSays = () => {
  return (
    <Carousel className="w-[85%] lg:w-full mx-auto   ">
      <CarouselContent className=" h-full">
        {whatTeamSays.map((testimonial, index) => (
          <CarouselItem className="   sm:basis-1/2  lg:basis-1/3" key={index}>
            <MagicCard
              key={index}
              className=" w-full h-full flex flex-col items-center justify-between text-white bg-black/20 border-none p-5 rounded-2xl "
            >
              <div className=" flex flex-col justify-between h-full">
                <p title={testimonial.testimonial} className=" line-clamp-4 ">
                  {testimonial.testimonial}
                </p>

                <div className=" mt-5 flex items-center gap-5">
                  <div>
                    <img
                      className=" w-12 object-cover aspect-square rounded-full"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  </div>
                  <div>
                    <h3 className=" text-white text-base font-bold">
                      {testimonial.name}
                    </h3>
                    <p className=" font-medium text-sm text-primary">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </MagicCard>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default WhatOurEmlpoyeesSays;
