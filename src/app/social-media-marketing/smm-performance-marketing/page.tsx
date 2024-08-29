import PerfomanceMarketingComponent from "@/components/our-services/smm/perfomance";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Perfomance Marketing | Lucien Solutions",
});
const PerfomanceMarketingPage = () => {
  return <PerfomanceMarketingComponent />;
};

export default PerfomanceMarketingPage;
