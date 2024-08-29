import TechincalSeoComponent from "@/components/our-services/seo/techincal-seo";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Technical SEO | Lucien Solutions",
});
const TechincalSeo = () => {
  return <TechincalSeoComponent />;
};

export default TechincalSeo;
