import FooterPages from "@/components/shared/footer-pages";
import { sampleBlogMd } from "@/data/blogs";
import {
  disclaimer,
  privacyPolicy,
  refundPolicy,
  shippingAndDeliveryPolicy,
  termsAndConditions,
} from "@/data/footer-pages";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Refund Policy | Lucien Solutions",
});
const ReturnPolicyPage = () => {
  return (
    <FooterPages heading="Refund and Return Policy" content={refundPolicy} />
  );
};

export default ReturnPolicyPage;
