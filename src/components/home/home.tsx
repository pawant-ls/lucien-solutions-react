"use client";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Badge } from "lucide";
import { ClientMarquee } from "./client-logo-marquee";
import { blogs, contactUsData, servicesCard, testimonials } from "@/data/home";
import { Calendar, User2Icon } from "lucide-react";
import Heading from "../shared/heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import BoxReveal from "../magicui/box-reveal";
import NumberTicker from "../magicui/number-ticker";
import { MagicCard } from "../magicui/magic-card";
const HomePage = () => {
  return (
    <main>
      <section
        style={{
          backgroundImage: "url('/images/light-house.jpg')",
        }}
        className=" h-[70vh] lg:h-screen bg-cover bg-center flex items-center justify-center"
      >
        <div className="container">
          <div className=" text-gray-200 max-w-xl">
            <BoxReveal boxColor={"transparent"} duration={1}>
              <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold ">
                Your Digital Lighthouse in the Sea Of Success
              </h1>
            </BoxReveal>
            <BoxReveal boxColor={"transparent"} duration={1.3}>
              <p className=" mt-5 md:mt-10 md:text-xl">
                Crafted to precision by trusted experts, our data-backed,
                result-driven, innovative approaches foster meaningful
                connections with end users.
              </p>
            </BoxReveal>

            <div className=" flex items-center gap-4 mt-10">
              <IconBrandFacebook size={32} />
              <IconBrandInstagram size={32} />
              <IconBrandLinkedin size={32} />
            </div>
          </div>
        </div>
      </section>

      <section className=" min-h-screen bg-gradient-to-b   from-[#070A15] to-[#3F1651] ">
        <div className=" container">
          <ClientMarquee />

          <Heading
            firstLine={["Strategic Solutions Tailored to"]}
            secondLine="ILLUMINATE YOUR BRAND"
            description="At Lucien Solutions, we believe in personalised strategies
              tailored to your unique needs. By combining creativity with
              data-driven insights, we craft campaigns that not only address
              pain points but also illuminate the way ahead."
          />

          <div className=" grid md:grid-cols-2 lg:grid-cols-3 mt-20 gap-5">
            {servicesCard.map((service, index) => (
              <ServiceCard service={service} />
            ))}
          </div>

          <div>
            <Heading
              firstLine={["Contact", "Us"]}
              description="Got thoughts, questions, or concerns? Don’t let them hold you
              back, we’re just a click away! Reach out anytime."
            />
          </div>

          <div className=" mt-20 grid md:grid-cols-2 pb-10 gap-10">
            <div className=" grid grid-cols-2 gap-7 ">
              {contactUsData.map((data, index) => (
                <div
                  key={index}
                  className=" text-gray-800 text-center bg-white p-10 rounded-2xl "
                >
                  <h1 className=" text-4xl font-semibold   ">
                    <NumberTicker value={data.count} /> {data.addPlus && "+"}
                  </h1>

                  <p className=" mt-3">{data.text}</p>
                </div>
              ))}

              <div className=" col-span-2  w-full">
                <img
                  className=" w-full  h-56 object-cover rounded-2xl "
                  src="/images/contact-home-scaled.webp"
                  alt="image"
                />
              </div>
            </div>

            <MagicCard
              gradientColor="#3C176C"
              className=" w-full border-none bg-black/20 rounded-2xl text-gray-100 p-10"
            >
              <div className=" w-full flex flex-col gap-2">
                <label>First name</label>

                <input
                  type="text"
                  className=" bg-black/50 rounded-xl p-3 focus:ring-4 "
                />
              </div>
              <div className=" mt-5 flex flex-col gap-2">
                <label>Last name</label>

                <input
                  type="text"
                  className=" bg-black/50 rounded-xl p-3 focus:ring-4 "
                />
              </div>
              <div className=" flex mt-5 flex-col gap-2">
                <label>Email Address</label>

                <input
                  type="text"
                  className=" bg-black/50 rounded-xl p-3 focus:ring-4 "
                />
              </div>
              <div className=" mt-5 flex flex-col gap-2">
                <label>Message</label>

                <textarea className=" bg-black/50 rounded-xl p-3 focus:ring-4 " />
              </div>
            </MagicCard>
          </div>

          <div className=" my-20">
            <Heading
              firstLine={["Shining a Light on", "Our Clients"]}
              description=""
            />

            <div className=" grid md:grid-cols-2  lg:grid-cols-4 gap-5 ">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className=" bg-black/40 p-4  rounded-2xl text-white"
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
                  <p className=" mt-4 text-sm">{testimonial.testimonial}</p>
                </div>
              ))}
            </div>
          </div>

          <div className=" mt-20">
            <Heading firstLine={["Latest", "Blogs/News"]} description="" />

            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className=" bg-white p-5 rounded-2xl text-gray-800"
                >
                  <img
                    className=" rounded-lg"
                    src={blog.image}
                    alt={blog.title}
                  />

                  <div className=" flex  items-center gap-3 mt-3">
                    <div className="text-sm flex items-center gap-1 ">
                      <User2Icon size={20} />
                      <span className=" ml-2">{blog.author}</span>
                    </div>
                    <div className=" flex items-center gap-1 ">
                      <Calendar size={20} />
                      <span className="text-sm ml-2">{blog.date}</span>
                    </div>
                  </div>

                  <div className=" mt-3  flex items-center gap-5">
                    <h1 className=" text-lg font-bold">{blog.title}</h1>
                  </div>
                  <p className=" text-sm mt-3">{blog.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <GradientMixer />
    </main>
  );
};

export const GradientMixer = () => {
  return (
    <div className=" h-32 bg-gradient-to-b from-[#3F1651] to-[#040414] "></div>
  );
};

export const ServiceCard = ({ service }: { service: any }) => {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <>
      <MagicCard
        gradientColor="#3C176C"
        className="text-white border-none cursor-pointer text-center bg-black/40 p-10 rounded-2xl"
      >
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          custom={0}
        >
          <FontAwesomeIcon className="text-4xl mb-3" icon={service.icon} />
        </motion.div>
        <motion.h1
          className="text-2xl font-semibold"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          custom={1}
        >
          {service.name}
        </motion.h1>
        <motion.p
          className="mt-5"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          custom={2}
        >
          {service.description}
        </motion.p>
      </MagicCard>
    </>
  );
};

export default HomePage;
