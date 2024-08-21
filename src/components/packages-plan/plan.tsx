import React from "react";
import CustomButton from "../shared/button";

const SMMCards = ({ plans }: { plans: any }) => {
  return (
    <div className="  md:hidden  grid md:grid-cols-3 w-full gap-8 ">
      {plans.map((plan: any, index: number) => (
        <div
          key={index}
          className={`w-full  bg-white  rounded-xl shadow-md    transition-transform duration-300 ease-in-out`}
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
                      : (value as React.ReactNode)}
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
