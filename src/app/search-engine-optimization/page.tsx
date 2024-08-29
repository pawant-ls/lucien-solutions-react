import SearchEngineOptimizationComponent from "@/components/our-services/seo";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Search Engine Optimization | Lucien Solutions",
});
const SearchEngineOptimization = () => {
  return <SearchEngineOptimizationComponent />;
};

export default SearchEngineOptimization;
