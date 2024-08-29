import LinkedinMarketingComponent from "@/components/our-services/smm/linkedin";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Linkedin Marketing | Lucien Solutions",
});
const LinkedinMarketingPage = () => {
  return <LinkedinMarketingComponent />;
};

export default LinkedinMarketingPage;
