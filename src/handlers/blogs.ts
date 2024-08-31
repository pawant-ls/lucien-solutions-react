import { STRAPI_URL } from "@/lib/api";
import axios from "axios";

export const blogsData = async () => {
  try {
    const res = await axios.get(
      `${STRAPI_URL}/api/blog?populate=blogs.author.profile,blogs.image`,
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

export const blogData = async (id: string) => {
  try {
    const res = await axios.get(
      `${STRAPI_URL}/api/blog?populate=blogs.author.profile,blogs.image&filters[blogs][blogId][$eq]=${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
      }
    );

    return res.data.data.attributes.blogs[0];
  } catch (error) {
    console.error(error);
    return null;
  }
};
