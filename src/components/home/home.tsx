"use client";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Badge } from "lucide";
import { ClientMarquee } from "./client-logo-marquee";
import { contactUsData, servicesCard, testimonials } from "@/data/home";
import { ArrowRight, Calendar, Plus, User2Icon } from "lucide-react";
import Heading from "../shared/heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import BoxReveal from "../magicui/box-reveal";
import NumberTicker from "../magicui/number-ticker";
import { MagicCard } from "../magicui/magic-card";
import useEmblaCarousel from "embla-carousel-react";
import BlogCard from "../blogs/card";
import CustomButton from "../shared/button";
import Marquee from "../magicui/marquee";
import Slider from "react-slick";
import ClientTestimonials from "./testimonials";
import Blogs from "./blogs";

const HomePage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <main>
      <section
        style={{
          backgroundImage: "url('/images/light-house.jpg')",
        }}
        className="  h-[70vh] lg:h-screen bg-cover bg-center flex items-center justify-center"
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

      <section className=" overflow-x-hidden min-h-screen bg-gradient-to-b   from-[#070A15] to-[#3F1651] ">
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
                <NumbersCard key={index} data={data} />
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
              className=" w-full  border-none bg-black/20 rounded-2xl text-gray-100 p-5 md:p-10"
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
            <ClientTestimonials />
            <div className="  "></div>
          </div>

          <div className=" mt-20">
            <Heading firstLine={["Latest", "Blogs/News"]} description="" />

            <Blogs />
          </div>
        </div>
      </section>
      <GradientMixer />
    </main>
  );
};

export const NumbersCard = ({ data }: { data: any }) => {
  return (
    <div className=" text-gray-800 text-center bg-white p-10 rounded-2xl ">
      <h1 className=" text-4xl flex items-center justify-center font-semibold   ">
        <NumberTicker value={data.count} />{" "}
        {data.addPlus && <Plus className=" text-primary font-bold" />}
      </h1>

      <p className=" mt-3">{data.text}</p>
    </div>
  );
};

export const GradientMixer = () => {
  return (
    <div className=" h-32 bg-gradient-to-b from-[#3F1651] to-[#040414] "></div>
  );
};

export const ServiceCard = ({
  findOutMore = false,
  service,
  hover = true,
  className = "",
}: {
  service: any;
  hover?: boolean;
  findOutMore?: boolean;
  className?: string;
}) => {
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
    <MagicCard gradientColor="#3C176C" className=" bg-transparent border-none ">
      <div
        className={`text-white group overflow-hidden  min-h-[250px] flex justify-center items-center flex-col    relative border-none cursor-pointer text-center bg-black/40 p-5 rounded-2xl ${className}`}
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
        {service.description && (
          <div
            className={`z-10  justify-center items-center ${
              hover
                ? "sm:hidden sm:group-hover:flex flex-col  sm:absolute  top-0 left-0 right-0 bottom-0 sm:text-white"
                : ""
            }     transition-all flex flex-col items-center justify-center p-5`}
          >
            {service.description && (
              <motion.p
                className=" text-sm sm:text-base  font-medium"
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                custom={2}
              >
                {service.description}
              </motion.p>
            )}

            {findOutMore && (
              <motion.div
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                className=" hover:underline font-medium text-sm mt-4 "
              >
                <span>Find Out More</span>

                <ArrowRight className="w-4 h-4 inline-block ml-2" />
              </motion.div>
            )}
          </div>
        )}

        {hover && (
          <span
            className={`
            absolute hidden sm:block -left-12 w-3 h-3 z-0 top-1/2 -translate-y-1/2  rounded-full transform translate-x-8 
            group-hover:scale-[80] group-hover:-translate-x-1/2 
            transition-all duration-300 ease-in-out
            bg-primary
            `}
          ></span>
        )}
      </div>
    </MagicCard>
  );
};

export default HomePage;
