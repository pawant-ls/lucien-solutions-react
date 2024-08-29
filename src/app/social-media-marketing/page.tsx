import SocialMediaMarketingComponent from "@/components/our-services/social-media";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Social Media Marketing | Lucien Solutions",
});
const SocialMediaMarketing = () => {
  return <SocialMediaMarketingComponent />;
};

export default SocialMediaMarketing;
