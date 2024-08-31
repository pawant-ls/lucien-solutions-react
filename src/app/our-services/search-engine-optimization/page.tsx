import SearchEngineOptimizationComponent from "@/components/our-services/seo";
import { singlePackagePlan } from "@/handlers/package-plans";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Search Engine Optimization | Lucien Solutions",
});
const SearchEngineOptimization = async () => {
  const data = await singlePackagePlan("searchEngineOptimization");
  return <SearchEngineOptimizationComponent data={data} />;
};

export default SearchEngineOptimization;
