import InternationalSeoComponent from "@/components/our-services/seo/international";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "International SEO | Lucien Solutions",
});
const InternationalSeo = () => {
    return ( <InternationalSeoComponent/> );
}
 
export default InternationalSeo;