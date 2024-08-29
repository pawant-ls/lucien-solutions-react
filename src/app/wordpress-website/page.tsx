import WordpressComponent from "@/components/our-services/wordpress-website";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Wordpress Development | Lucien Solutions",
});
const WordpressPage = () => {
  return <WordpressComponent />;
};

export default WordpressPage;
