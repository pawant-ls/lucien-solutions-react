import FacebookMarketingComponent from "@/components/our-services/smm/facebook";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Facebook Marketing | Lucien Solutions",
});
const FacebookMarketingPage = () => {
  return <FacebookMarketingComponent />;
};

export default FacebookMarketingPage;
