"use client";

import { faAnchor, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { GradientMixer, ServiceCard } from "../home/home";
import Heading from "../shared/heading";
import { ourStory, teamData, teamValues } from "@/data/about";
import { reverse } from "dns";
import CustomButton from "../shared/button";
import { MagicCard } from "../magicui/magic-card";

const AboutUsComponent = () => {
  return (
    <main className=" pt-20  min-h-screen bg-gradient-to-b   from-[#070A15] to-[#3F1651] ">
      <section className="  container">
        <Heading
          firstLine={["who ", "we are?"]}
          description="A group of talented and passionate professionals who breathe and think digital. We wish to empower businesses with cutting-edge digital solutions, fostering growth and success in the ever-evolving online landscape.

"
        />

        <div className=" grid md:grid-cols-2 gap-5">
          <ServiceCard
            service={{
              icon: faAnchor,

              name: "Our Vision",
              description:
                "To be the most creative digital marketing agency in the world through innovations and excellence.",
            }}
          />
          <ServiceCard
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

        <div className=" mt-32">
          <div className=" flex gap-5 my-10 items-center ">
            <CustomButton size="round" white={false}>
              All
            </CustomButton>
            <CustomButton size="round" white>
              Core Team
            </CustomButton>
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
            {teamData.map((team, index) => (
              <TeamCard key={index} team={team} />
            ))}
          </div>
        </div>
      </section>

      <GradientMixer />
    </main>
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
          <h1 className=" text-4xl font-semibold">
            {story?.title && story?.title[0]}{" "}
            <span className=" text-primary">
              {story?.title && story?.title[1]}
            </span>
          </h1>
          <h3 className=" mt-3">
            {story.subHeading && (
              <span className=" text-primary">{story.subHeading}</span>
            )}
          </h3>
          <p className=" mt-5">{story.description}</p>
        </div>
      </div>
    </div>
  );
};

const TeamCard = ({ team }: { team: any }) => {
  return (
    <div className="  text-gray-100  rounded-xl">
      <div className=" flex flex-col gap-2">
        <img
          className=" w-full aspect-[5/6] rounded-xl object-cover"
          src={"https://placehold.co/400x400"}
          alt="team"
        />

        <h1 className=" mt-3 text-xl font-semibold">
          {team?.name.split(" ")[0]}{" "}
          <span className=" text-primary">
            {team?.name && team?.name.split(" ")[1]}
          </span>
        </h1>
        <h3>
          <span className=" text-primary">{team?.position}</span>
        </h3>
        <p className=" text-sm line-clamp-4  mt-2">{team.description}</p>
      </div>
    </div>
  );
};

export default AboutUsComponent;
