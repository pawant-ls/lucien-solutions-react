import { STRAPI_URL } from "@/lib/api";

export const getImageUrl = (data: any) => {
  if (!data) return null;
  if (!data.data) return null;

  //   if in production, return the image url
  if (process.env.NODE_ENV === "production") {
    return `${data.data.attributes.url}`;
  }
  return `${STRAPI_URL}${data.data.attributes.url}` as string;
};
