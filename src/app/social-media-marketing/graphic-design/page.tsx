import GraphicDesignMarketingComponent from "@/components/our-services/smm/graphic-design";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Graphic Design | Lucien Solutions",
});
const GraphicDesign = () => {
    return ( <GraphicDesignMarketingComponent/> );
}
 
export default GraphicDesign;