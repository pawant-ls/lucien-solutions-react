import { STRAPI_URL } from "@/lib/api";
import axios from "axios";

export const packagePlanData = async () => {
  try {
    const res = await axios.get(
      `${STRAPI_URL}/api/packages-and-plan?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
      }
    );

    return res.data.data.attributes;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const singlePackagePlan = async (
  name:
    | "emailMarketing"
    | "searchEngineOptimization"
    | "websiteDevelopment"
    | "socialMediaMarketing"
    | "perfomanceMarketing"
) => {
  try {
    const res = await axios.get(
      `${STRAPI_URL}/api/packages-and-plan?populate=${name}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
      }
    );

    return res.data.data.attributes;
  } catch (error) {
    console.error(error);
    return null;
  }
};
