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

export const jobData = async (id: string) => {
  try {
    const res = await axios.get(
      `${STRAPI_URL}/api/career?populate[jobs][filters][jobId][$eq]=${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
      }
    );

    return res.data.data.attributes.jobs[0];
  } catch (error) {
    console.error(error);
    return null;
  }
};
