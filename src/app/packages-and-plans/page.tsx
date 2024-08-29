import PackagesPlanComponent from "@/components/packages-plan/packages-plan";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Packages and Plans | Lucien Solutions",
});
const PackagesPlanPage = () => {
  return <PackagesPlanComponent />;
};

export default PackagesPlanPage;
