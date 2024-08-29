import EcommerceSeoComponent from "@/components/our-services/seo/ecommerce";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Ecommerce SEO | Lucien Solutions",
});
const EcommerceSeo = () => {
  return <EcommerceSeoComponent />;
};

export default EcommerceSeo;
