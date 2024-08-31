import SocialMediaMarketingComponent from "@/components/our-services/social-media";
import { singlePackagePlan } from "@/handlers/package-plans";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Social Media Marketing | Lucien Solutions",
});
const SocialMediaMarketing = async () => {
  const data = await singlePackagePlan("socialMediaMarketing");
  return <SocialMediaMarketingComponent data={data} />;
};

export default SocialMediaMarketing;
