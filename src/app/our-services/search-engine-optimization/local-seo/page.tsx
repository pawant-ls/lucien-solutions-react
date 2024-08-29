import LocalSeoComponent from "@/components/our-services/seo/local";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Local SEO | Lucien Solutions",
});
const LocalSeo = () => {
  return <LocalSeoComponent />;
};

export default LocalSeo;
