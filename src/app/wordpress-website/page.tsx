import WordpressComponent from "@/components/our-services/wordpress-website";
import { singlePackagePlan } from "@/handlers/package-plans";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Wordpress Development | Lucien Solutions",
});
const WordpressPage = async () => {
  const data = await singlePackagePlan("websiteDevelopment");
  return <WordpressComponent data={data} />;
};

export default WordpressPage;
