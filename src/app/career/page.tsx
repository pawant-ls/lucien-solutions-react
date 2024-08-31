import CareerComponent from "@/components/career/career";
import { careerData } from "@/handlers/career";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Careers | Lucien Solutions",
});

const CareerPage = async () => {
  const data = await careerData();
  return <CareerComponent data={data} />;
};

export default CareerPage;
