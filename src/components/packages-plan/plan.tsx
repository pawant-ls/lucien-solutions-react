import React from "react";
import CustomButton from "../shared/button";

interface Plan {
  name: string;
  price: string;
  billingCycle: string;
  features: {
    Creatives: number;
    Reels: number;
    "Account Management": boolean;
    "Content Calendar": boolean;
    "Content Strategy": boolean;
    "Community Engagement": boolean;
    "Reporting & Analytics": string;
    "Ad Campaigns": string;
    "Ad budget": string;
    Trendjacking: boolean;
  };
  callToAction: string;
}

const plans: Plan[] = [
  {
    name: "Basic Plan",
    price: "₹ 10,000",
    billingCycle: "Payable Every Month",
    features: {
      Creatives: 12,
      Reels: 4,
      "Account Management": true,
      "Content Calendar": true,
      "Content Strategy": true,
      "Community Engagement": true,
      "Reporting & Analytics": "Monthly",
      "Ad Campaigns": "1 Ad",
      "Ad budget": "billed as actuals",
      Trendjacking: true,
    },
    callToAction: "Get Started",
  },
  {
    name: "Advanced Plan",
    price: "₹ 25,000",
    billingCycle: "Payable Every Month",
    features: {
      Creatives: 24,
      Reels: 4,
      "Account Management": true,
      "Content Calendar": true,
      "Content Strategy": true,
      "Community Engagement": true,
      "Reporting & Analytics": "Monthly",
      "Ad Campaigns": "1 Ad",
      "Ad budget": "billed as actuals",
      Trendjacking: true,
    },
    callToAction: "Get Started",
  },
  {
    name: "Standard Plan",
    price: "₹ 15,000",
    billingCycle: "Payable Every Month",
    features: {
      Creatives: 16,
      Reels: 4,
      "Account Management": true,
      "Content Calendar": true,
      "Content Strategy": true,
      "Community Engagement": true,
      "Reporting & Analytics": "Monthly",
      "Ad Campaigns": "1 Ad",
      "Ad budget": "billed as actuals",
      Trendjacking: true,
    },
    callToAction: "Get Started",
  },
];

const SMMCards: React.FC = () => {
  return (
    <div className=" grid md:grid-cols-3 justify-center gap-8 p-6">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`w-full  bg-white  rounded-xl shadow-md   ${
            plan.name === "Advanced Plan" ? "md:scale-105" : "md:scale-95"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className=" text-center rounded-t-xl p-6 bg-primary text-white ">
            <h2 className="text-xl font-semibold mb-4">{plan.name}</h2>
          </div>

          <div className=" p-6 py-3 text-center border-b">
            <p className="text-gray-800 font-semibold text-xl mb-2">
              {plan.price}
            </p>
            <p className="text-gray-500 ">{plan.billingCycle}</p>
          </div>
          <div className=" flex flex-col p-6 ">
            <ul className="mb-4">
              {Object.entries(plan.features).map(([feature, value], idx) => (
                <li key={idx} className="flex justify-between py-1">
                  <span className="text-gray-700">{feature}</span>
                  <span className="text-gray-500">
                    {typeof value === "boolean"
                      ? value
                        ? "Yes"
                        : "No"
                      : value}
                  </span>
                </li>
              ))}
            </ul>
            {/* <a
              href="#"
              className="mt-auto inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg text-center hover:bg-blue-600 transition-colors duration-200"
            >
              {plan.callToAction}
            </a> */}

            <CustomButton white={false}>{plan.callToAction}</CustomButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SMMCards;
