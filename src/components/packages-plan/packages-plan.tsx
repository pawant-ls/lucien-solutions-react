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
import Link from "next/link";
import SMMCards from "./plan";
// import SMMTable from "./plan";

const PackagesPlanComponent = () => {
  return (
    <main className=" pt-20  min-h-screen bg-gradient-to-b   from-[#070A15] to-[#3F1651]">
      <section id="" className=" container">
        <Heading
          firstLine={["PLANS & ", "PACKAGES"]}
          description="Pick the plan that’s best for you, call us to find it
          "
        />

        <div className=" flex justify-center my-20 flex-wrap gap-5 ">
          {planCategories.map((item, i) => (
            <a href={`#${item.id}`} key={i}>
              <CustomButton>{item.name}</CustomButton>
            </a>
          ))}
        </div>
        <Heading
          firstLine={["SOCIAL MEDIA MARKETING ", "PACKAGES"]}
          description="Get the most out of your marketing budget with our performance marketing plans."
        />
        <SMMTable plans={smmPackages} />

        <SMMCards plans={smmPackages} />
      </section>

      <section id="pm-packages" className=" container">
        <Heading
          firstLine={["PERFORMANCE MARKETING ", "PACKAGES"]}
          description="Get the most out of your marketing budget with our performance marketing plans."
        />
        <SMMTable plans={perfMarketing} />
        <SMMCards plans={perfMarketing} />
      </section>
      <section id="website-packages" className=" container">
        <Heading firstLine={["WEBSITE  ", "PACKAGES"]} />
        <SMMTable plans={websitePackages} />
        <SMMCards plans={websitePackages} />
      </section>
      <section id="email-packages" className=" container">
        <Heading firstLine={["EMAIL MARKETING   ", "PACKAGES"]} />
        <SMMTable plans={emailPackages} />
        <SMMCards plans={emailPackages} />
      </section>
      <section id="seo-packages" className=" container">
        <Heading firstLine={["SEARCH ENGINE OPTIMIZATION   ", "PACKAGES"]} />
        <SMMTable plans={seoPackages} />
        <SMMCards plans={seoPackages} />
      </section>

      <GradientMixer />
    </main>
  );
};

export default PackagesPlanComponent;
