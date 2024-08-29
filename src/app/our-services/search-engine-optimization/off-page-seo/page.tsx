import OffPageSeoComponent from "@/components/our-services/seo/off-page";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Off Page SEO | Lucien Solutions",
});
const OffPageSeo = () => {
  return <OffPageSeoComponent />;
};

export default OffPageSeo;
