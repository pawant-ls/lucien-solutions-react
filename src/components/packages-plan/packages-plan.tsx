"use client";

import {
  emailPackages,
  perfMarketing,
  planCategories,
  seoPackages,
  smmPackages,
  websitePackages,
} from "@/data/package-plans";
import Heading from "../shared/heading";
import PackageTable from "./package-table";
import SMMTable from "./table-plans";
import CustomButton from "../shared/button";
import { GradientMixer } from "../home/home";
// import SMMTable from "./plan";

const PackagesPlanComponent = () => {
  return (
    <main className=" pt-20  min-h-screen bg-gradient-to-b   from-[#070A15] to-[#3F1651]">
      <section className=" container">
        <Heading
          firstLine={["PLANS & ", "PACKAGES"]}
          description="Pick the plan that’s best for you, call us to find it
          "
        />

        <div className=" flex justify-center my-20 flex-wrap gap-5 ">
          {planCategories.map((item, i) => (
            <CustomButton key={i}>{item.name}</CustomButton>
          ))}
        </div>
        <SMMTable plans={smmPackages} />
      </section>

      <section className=" container">
        <Heading
          firstLine={["PERFORMANCE MARKETING ", "PACKAGES"]}
          description="Get the most out of your marketing budget with our performance marketing plans."
        />
        <SMMTable plans={perfMarketing} />
      </section>
      <section className=" container">
        <Heading firstLine={["WEBSITE  ", "PACKAGES"]} />
        <SMMTable plans={websitePackages} />
      </section>
      <section className=" container">
        <Heading firstLine={["EMAIL MARKETING   ", "PACKAGES"]} />
        <SMMTable plans={emailPackages} />
      </section>
      <section className=" container">
        <Heading firstLine={["SEARCH ENGINE OPTIMIZATION   ", "PACKAGES"]} />
        <SMMTable plans={seoPackages} />
      </section>

      <GradientMixer />
    </main>
  );
};

export default PackagesPlanComponent;
