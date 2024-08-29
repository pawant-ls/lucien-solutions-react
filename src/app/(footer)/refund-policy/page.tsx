import FooterPages from "@/components/shared/footer-pages";
import { sampleBlogMd } from "@/data/blogs";
import {
  disclaimer,
  privacyPolicy,
  refundPolicy,
  shippingAndDeliveryPolicy,
  termsAndConditions,
} from "@/data/footer-pages";

const ReturnPolicyPage = () => {
  return (
    <FooterPages heading="Refund and Return Policy" content={refundPolicy} />
  );
};

export default ReturnPolicyPage;
