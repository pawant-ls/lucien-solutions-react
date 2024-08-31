import PackagesPlanComponent from "@/components/packages-plan/packages-plan";
import { packagePlanData } from "@/handlers/package-plans";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Packages and Plans | Lucien Solutions",
});
const PackagesPlanPage = async () => {
  const data = await packagePlanData();
  return <PackagesPlanComponent data={data} />;
};

export default PackagesPlanPage;
