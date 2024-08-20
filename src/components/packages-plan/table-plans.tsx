import { CircleCheck, CircleX } from "lucide-react";
import React from "react";
import CustomButton from "../shared/button";
import { perfMarketing } from "@/data/package-plans";

const TablePlans = ({ plans }: { plans: any }) => {
  const extractFeatureKeys = (plans: any): string[] => {
    const featureSet = new Set<string>();

    plans.forEach((plan: any) => {
      Object.keys(plan.features).forEach((feature) => {
        featureSet.add(feature);
      });
    });

    return Array.from(featureSet);
  };

  if (plans.length === 0) return null;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full  bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100 ">
            <th className="px-6 py-3 text-left text-sm font-medium  text-gray-700">
              <h2 className=" text-2xl font-bold">FEATURES</h2>
              <p>COMPANY PACKAGE FEATURES</p>
            </th>
            {plans.map((plan: any, index: any) => (
              <th
                key={index}
                className="px-6 py-3 text-center text-sm font-medium text-gray-700"
              >
                <h3 className=" ">{plan.name}</h3>
                <p className=" mt-2 text-2xl font-semibold">{plan.price}</p>
                <p>{plan.billingCycle}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {extractFeatureKeys(plans).map((feature: any, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {feature}
              </td>
              {plans?.map((plan: any, planIndex: any) => (
                <td
                  key={planIndex}
                  className="px-6 py-4 capitalize whitespace-nowrap text-center  text-sm text-gray-500"
                >
                  {plan.features[feature] !== undefined ? (
                    typeof plan.features[feature] === "boolean" ? (
                      plan.features[feature] ? (
                        <CircleCheck className=" mx-auto" color="#1ba300" />
                      ) : (
                        <CircleX className=" mx-auto" color="#ff0000" />
                      )
                    ) : (
                      plan.features[feature]
                    )
                  ) : (
                    "N/A"
                  )}
                </td>
              ))}
            </tr>
          ))}
          <tr className="border-t border-gray-200">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Action
            </td>
            {plans.map((plan: any, index: any) => (
              <td
                key={index}
                className="px-6 py-4 whitespace-nowrap text-sm  cursor-pointer"
              >
                <a className=" mx-auto flex justify-center" href="#">
                  <CustomButton className=" mx-auto" white={false}>
                    {plan.callToAction}
                  </CustomButton>
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablePlans;
