import ContentMarketingComponent from "@/components/our-services/smm/content-marketing";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Content Marketing | Lucien Solutions",
});
const ContentMarketingPage = () => {
  return <ContentMarketingComponent />;
};

export default ContentMarketingPage;
