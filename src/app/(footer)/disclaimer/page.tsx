import FooterPages from "@/components/shared/footer-pages";
import { sampleBlogMd } from "@/data/blogs";
import {
  disclaimer,
  shippingAndDeliveryPolicy,
  termsAndConditions,
} from "@/data/footer-pages";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Disclaimer | Lucien Solutions",
});
const DisclaimerPage = () => {
  return <FooterPages heading="Disclaimer" content={disclaimer} />;
};

export default DisclaimerPage;
