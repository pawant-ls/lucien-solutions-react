import OurServicesComponent from "@/components/our-services/our-services";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Our Services | Lucien Solutions",
});
const OurServicesPage = () => {
  return <OurServicesComponent />;
};

export default OurServicesPage;
