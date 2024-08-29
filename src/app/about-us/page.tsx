import AboutUsComponent from "@/components/about/about";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "About Us | Lucien Solutions",
});
const AboutUsPage = () => {
  return <AboutUsComponent />;
};

export default AboutUsPage;
