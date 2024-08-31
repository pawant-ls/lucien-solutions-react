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

interface IPlan {
  name: string;
  price: string;
  billingCycle: string;
  features: {
    [key: string]: any;
  };
  callToAction: string;
}

interface ICategory {
  name: string;
  categoryId: string;
}

interface IData {
  categories: ICategory[];
  emailMarketing: IPlan[];
  perfomanceMarketing: IPlan[];

  searchEngineOptimization: IPlan[];
  socialMediaMarketing: IPlan[];
  websiteDevelopment: IPlan[];
}

const PackagesPlanComponent = ({ data }: { data: IData }) => {
  console.log(data);
  return (
    <MainBackground>
      <section id="" className=" container">
        <Heading
          firstLine={["PLANS & ", "PACKAGES"]}
          description="Pick the plan that’s best for you, call us to find it
          "
        />

        <div className=" flex justify-center my-20 flex-wrap gap-3 ">
          {data?.categories.map((item, i) => (
            <a href={`#${item.categoryId}`} key={i}>
              <div className=" border py-2 rounded-full border-text/20 cursor-pointer text-sm hover:bg-primary transition-all   px-4 ">
                {item.name}
              </div>
            </a>
          ))}
        </div>
        <Heading
          firstLine={["SOCIAL MEDIA MARKETING ", "PACKAGES"]}
          description="Get the most out of your marketing budget with our performance marketing plans."
        />
        <TablePlans plans={data?.socialMediaMarketing} />

        <PlanCards plans={data?.socialMediaMarketing} />
      </section>

      <section id="pm-packages" className=" container">
        <Heading
          firstLine={["PERFORMANCE MARKETING ", "PACKAGES"]}
          description="Get the most out of your marketing budget with our performance marketing plans."
        />
        <TablePlans plans={data?.perfomanceMarketing} />
        <PlanCards plans={data?.perfomanceMarketing} />
      </section>
      <section id="website-packages" className=" container">
        <Heading firstLine={["WEBSITE  ", "PACKAGES"]} />
        <TablePlans plans={data.websiteDevelopment} />
        <PlanCards plans={data.websiteDevelopment} />
      </section>
      <section id="email-packages" className=" container">
        <Heading firstLine={["EMAIL MARKETING   ", "PACKAGES"]} />
        <TablePlans plans={data.emailMarketing} />
        <PlanCards plans={data.emailMarketing} />
      </section>
      <section id="seo-packages" className=" container">
        <Heading firstLine={["SEARCH ENGINE OPTIMIZATION   ", "PACKAGES"]} />
        <TablePlans plans={data.searchEngineOptimization} />
        <PlanCards plans={data.searchEngineOptimization} />
      </section>
    </MainBackground>
  );
};

export default PackagesPlanComponent;
