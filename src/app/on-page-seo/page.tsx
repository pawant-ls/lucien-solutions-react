import OnPageSeoComponent from "@/components/our-services/seo/on-page";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "On Page SEO | Lucien Solutions",
});
const OnPageSeo = () => {
  return <OnPageSeoComponent />;
};

export default OnPageSeo;
