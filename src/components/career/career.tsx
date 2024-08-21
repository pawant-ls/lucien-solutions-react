"use client";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { GradientMixer, ServiceCard } from "../home/home";
import Heading from "../shared/heading";
import { openings, whatTeamSays, whyWorkWithUs } from "@/data/career";
import CustomButton from "../shared/button";
import { MagicCard } from "../magicui/magic-card";
import WhatOurEmlpoyeesSays from "./what-our-employees";
import { useRouter } from "next/navigation";

const CareerComponent = () => {
  const router = useRouter();
  return (
    <main className=" pt-20  min-h-screen bg-gradient-to-b   from-[#070A15] to-[#3F1651]">
      <section className=" container">
        <Heading
          firstLine={["START DOING", "WORK THAT MATTERS"]}
          description="We’re a 100% remote team, spread all across the globe!
If you are passionate about building brands just as we are, we’re looking to work with you.
Come be a part of our diversified team!
"
        />
        <Heading
          firstLine={["WHY WORK WITH", "US?"]}
          description="We thrive in a dynamic and inclusive culture that encourages creativity
          and mentors you to reach full career potential.
          
"
        />

        <div className=" grid md:grid-cols-3 gap-5">
          {whyWorkWithUs.map((item, i) => (
            <ServiceCard
              key={i}
              hover={false}
              service={{
                // icon: faAnchor,
                name: item.title,
                description: item.description,
              }}
            />
          ))}
        </div>
      </section>

      <section className=" my-20 container">
        <Heading
          firstLine={["CAREER ", "OPPORTUNITIES"]}
          description="We are always on the lookout for talented individuals to join our team. If you are passionate about digital marketing, we would love to hear from you.
"
        />
        <div className="  grid md:grid-cols-2 gap-5 ">
          {openings.map((opening, i) => (
            <div className=" p-5 rounded-xl  bg-white ">
              <h3 className=" text-gray-800 text-xl font-semibold ">
                {opening.title}
              </h3>

              <p className=" mt-2 font-medium text-gray-700">
                {opening.description}
              </p>

              <div className=" mt-5 flex-col flex-start sm:flex-row gap-5 flex sm:items-center sm:justify-between">
                <p>{opening.location}</p>
                <CustomButton
                  onClick={() => router.push(`/jobs/test-job`)}
                  size="round"
                  white={false}
                >
                  Apply now
                </CustomButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className=" my-20  container">
        <Heading firstLine={["WHAT OUR EMPLOYEES  ", "SAY"]} />

        <WhatOurEmlpoyeesSays />
      </section>

      <GradientMixer />
    </main>
  );
};

export default CareerComponent;
