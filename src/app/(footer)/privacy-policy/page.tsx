import FooterPages from "@/components/shared/footer-pages";
import { sampleBlogMd } from "@/data/blogs";
import {
  disclaimer,
  privacyPolicy,
  shippingAndDeliveryPolicy,
  termsAndConditions,
} from "@/data/footer-pages";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Privacy Policy | Lucien Solutions",
});
const PrivacyPolicyPage = () => {
  return <FooterPages heading="Privacy Policy" content={privacyPolicy} />;
};

export default PrivacyPolicyPage;
