import FooterPages from "@/components/shared/footer-pages";
import { sampleBlogMd } from "@/data/blogs";
import {
  disclaimer,
  privacyPolicy,
  shippingAndDeliveryPolicy,
  termsAndConditions,
} from "@/data/footer-pages";

const PrivacyPolicyPage = () => {
  return <FooterPages heading="Privacy Policy" content={privacyPolicy} />;
};

export default PrivacyPolicyPage;
