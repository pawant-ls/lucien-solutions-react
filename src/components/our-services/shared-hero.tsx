import { contactUsData } from "@/data/home";
import { NumbersCard } from "../home/home";
import OurServicesHeading from "./heding";
import Spline from "@splinetool/react-spline";

const OurServicesHeroSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="  container">
      <main className=" min-h-80 bg-transparent  sm:-mt-40">
        <Spline scene="https://prod.spline.design/gNl7F4Fp8CJyOmOZ/scene.splinecode" />
      </main>{" "}
      <div className=" md:-mt-20">
        <OurServicesHeading title={title} description={description} />
      </div>
      <div>
        <div className=" my-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {contactUsData.map((data, index) => (
            <NumbersCard key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesHeroSection;
