import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { GradientMixer, ServiceCard } from "../home/home";
import Heading from "../shared/heading";
import { openings, whatTeamSays, whyWorkWithUs } from "@/data/career";
import CustomButton from "../shared/button";
import { MagicCard } from "../magicui/magic-card";

const CareerComponent = () => {
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

              <div className=" mt-5 flex items-center justify-between">
                <p>{opening.location}</p>
                <CustomButton size="round" white={false}>
                  Apply now
                </CustomButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className=" my-20  container">
        <Heading firstLine={["WHAT OUR EMPLOYEES  ", "SAY"]} />

        <div className=" grid md:grid-cols-3 gap-5">
          {whatTeamSays.map((testimonial, index) => (
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
          ))}
        </div>
      </section>

      <GradientMixer />
    </main>
  );
};

export default CareerComponent;
