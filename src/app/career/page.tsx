import CareerComponent from "@/components/career/career";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Careers | Lucien Solutions",
});
const CareerPage = () => {
  return <CareerComponent />;
};

export default CareerPage;
