"use client";

import { faAnchor, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { GradientMixer, ServiceCard } from "../home/home";
import Heading from "../shared/heading";
import { ourStory, teamData, teamValues } from "@/data/about";
import { reverse } from "dns";
import CustomButton from "../shared/button";
import { MagicCard } from "../magicui/magic-card";
import AnimatedTeamProfiles from "./AnimatedTeam";
import { useState } from "react";
import { motion } from "framer-motion";
import MainBackground from "../shared/main-bg";
const AboutUsComponent = () => {
  return (
    <MainBackground>
      <section className="  container">
        <Heading
          firstLine={["who ", "we are?"]}
          description="A group of talented and passionate professionals who breathe and think digital. We wish to empower businesses with cutting-edge digital solutions, fostering growth and success in the ever-evolving online landscape.

"
        />

        <div className=" grid md:grid-cols-2 gap-5">
          <ServiceCard
            hover={false}
            service={{
              icon: faAnchor,

              name: "Our Vision",
              description:
                "To be the most creative digital marketing agency in the world through innovations and excellence.",
            }}
          />
          <ServiceCard
            hover={false}
            service={{
              icon: faPaperPlane,
              name: "Our Mission",
              description:
                "Our mission is to pioneer digital solutions that inspire, connect, and transform businesses worldwide.",
            }}
          />
        </div>

        <div className=" mt-32">
          <Heading
            firstLine={["Team ", "Values"]}
            description="At Lucien Solutions, we are grounded by our values that uphold the shape of our company’s character and steers our collective journey. At our core, we build relationships and conduct business with principles that underline our commitment to ethical conduct and integrity.
"
          />

          <div className=" grid lg:grid-cols-2 gap-5">
            <div className=" ">
              <img
                className=" aspect-[5/3] object-cover w-full h-full rounded-xl "
                src="/images/6948bd02fe055cd7b6e559eaca84097d.jpeg"
                alt="team"
              />
            </div>

            <div className=" grid md:grid-cols-2 gap-5">
              {teamValues.map((value, index) => (
                <MagicCard
                  gradientColor="#3C176C"
                  key={index}
                  className={`text-gray-100 border-none   p-5 rounded-2xl ${
                    value.orange ? "bg-black/50" : "bg-black/20"
                  }`}
                >
                  <h1
                    className={`text-xl font-semibold ${
                      value.orange && " text-primary"
                    } `}
                  >
                    {value.title}
                  </h1>
                  <p className=" mt-3">{value.description}</p>
                </MagicCard>
              ))}
            </div>
          </div>
        </div>

        <div className=" mt-32">
          <Heading
            firstLine={["Meet the guiding lights of our brand"]}
            secondLine="the visionary who steers our ship towards success"
          />

          <div className=" mt-20 space-y-10">
            {ourStory.map((story, index) => (
              <OurStoryCard key={index} story={story} />
            ))}
          </div>
        </div>

        <div className=" mt-32">
          <Heading
            firstLine={["A Colorful Melange of ", "Innovators & Creators."]}
            description=""
          />

          <OurStoryCard
            story={{
              description:
                "A vibrant spectrum of personalities, each contributing a delightful mix of talents, quirks, and boundless imagination! Our diverse team embodies passion, dedication, and a shared commitment to excellence. From the analytical minds dissecting data and strategizing to the creative souls crafting masterpieces with words and designs. United by our common goal to exceed expectations and deliver exceptional results, together, we innovate and inspire.",

              image: "/images/Rectangle.jpg",
              reverse: true,
            }}
          />
        </div>
      </section>
      <AnimatedTeamProfiles />

      <TeamComponent />

      <GradientMixer />
    </MainBackground>
  );
};

const TeamComponent = () => {
  const [currentTeam, setCurrentTeam] = useState("all");

  return (
    <section className=" container">
      <div className=" mt-32">
        <div className=" flex gap-5 my-10 items-center ">
          <CustomButton
            onClick={() => setCurrentTeam("all")}
            size="round"
            white={currentTeam === "all" ? false : true}
          >
            All
          </CustomButton>
          <CustomButton
            onClick={() => setCurrentTeam("core")}
            size="round"
            white={currentTeam === "core" ? false : true}
          >
            Core Team
          </CustomButton>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
          {teamData.map((team, index) => {
            if (currentTeam === "core" && !team.coreTeam) return null;
            return <TeamCard index={index} key={index} team={team} />;
          })}
        </div>
      </div>
    </section>
  );
};

const OurStoryCard = ({ story }: { story: any }) => {
  return (
    <div>
      <div
        className={`text-gray-100 items-center flex-col flex   gap-10 ${
          story.reverse ? " md:flex-row-reverse" : "md:flex-row"
        } `}
      >
        <div>
          <img
            className=" w-full md:max-w-sm rounded-lg  aspect-[4/3] object-cover"
            src={story.image}
            alt="image"
          />
        </div>
        <div className=" flex-1 mt-5 ">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className=" text-4xl font-semibold"
          >
            {story?.title && story?.title[0]}{" "}
            <span className=" text-primary">
              {story?.title && story?.title[1]}
            </span>
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className=" mt-3"
          >
            {story.subHeading && (
              <span className=" text-primary">{story.subHeading}</span>
            )}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className=" mt-5"
          >
            {story.description}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

const TeamCard = ({ team, index }: { team: any; index: number }) => {
  return (
    <div className="  text-gray-100  rounded-xl">
      <div className=" flex flex-col gap-2">
        <motion.img
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: index * 0.1 }}
          className=" w-full aspect-[5/6] rounded-xl object-cover"
          src={team.image}
          alt={team.name}
        />

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className=" mt-3 text-xl font-semibold"
        >
          {team?.name.split(" ")[0]}{" "}
          <span className=" text-primary">
            {team?.name && team?.name.split(" ")[1]}
          </span>
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className=" text-primary">{team?.position}</span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className=" text-sm line-clamp-4  mt-2"
        >
          {team.description}
        </motion.p>
      </div>
    </div>
  );
};

export default AboutUsComponent;
