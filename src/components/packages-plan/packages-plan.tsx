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
import TablePlans from "./table-plans";
import CustomButton from "../shared/button";
import { GradientMixer } from "../home/home";
import Link from "next/link";
import PlanCards from "./plan";
import MainBackground from "../shared/main-bg";
// import TablePlans from "./plan";

const PackagesPlanComponent = () => {
  return (
    <MainBackground>
      <section id="" className=" container">
        <Heading
          firstLine={["PLANS & ", "PACKAGES"]}
          description="Pick the plan that’s best for you, call us to find it
          "
        />

        <div className=" flex justify-center my-20 flex-wrap gap-5 ">
          {planCategories.map((item, i) => (
            <a href={`#${item.id}`} key={i}>
              <CustomButton className="">{item.name}</CustomButton>
            </a>
          ))}
        </div>
        <Heading
          firstLine={["SOCIAL MEDIA MARKETING ", "PACKAGES"]}
          description="Get the most out of your marketing budget with our performance marketing plans."
        />
        <TablePlans plans={smmPackages} />

        <PlanCards plans={smmPackages} />
      </section>

      <section id="pm-packages" className=" container">
        <Heading
          firstLine={["PERFORMANCE MARKETING ", "PACKAGES"]}
          description="Get the most out of your marketing budget with our performance marketing plans."
        />
        <TablePlans plans={perfMarketing} />
        <PlanCards plans={perfMarketing} />
      </section>
      <section id="website-packages" className=" container">
        <Heading firstLine={["WEBSITE  ", "PACKAGES"]} />
        <TablePlans plans={websitePackages} />
        <PlanCards plans={websitePackages} />
      </section>
      <section id="email-packages" className=" container">
        <Heading firstLine={["EMAIL MARKETING   ", "PACKAGES"]} />
        <TablePlans plans={emailPackages} />
        <PlanCards plans={emailPackages} />
      </section>
      <section id="seo-packages" className=" container">
        <Heading firstLine={["SEARCH ENGINE OPTIMIZATION   ", "PACKAGES"]} />
        <TablePlans plans={seoPackages} />
        <PlanCards plans={seoPackages} />
      </section>
    </MainBackground>
  );
};

export default PackagesPlanComponent;
