import InstagramMarketingComponent from "@/components/our-services/smm/instgram";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Instagram Marketing | Lucien Solutions",
});
const InstagramPage = () => {
  return <InstagramMarketingComponent />;
};

export default InstagramPage;
