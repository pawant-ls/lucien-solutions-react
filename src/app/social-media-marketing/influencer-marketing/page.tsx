import InfluencerMarketingComponent from "@/components/our-services/smm/influencer";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Influencer Farketing | Lucien Solutions",
});
const InfluencerMarketingPage = () => {
  return <InfluencerMarketingComponent />;
};

export default InfluencerMarketingPage;
