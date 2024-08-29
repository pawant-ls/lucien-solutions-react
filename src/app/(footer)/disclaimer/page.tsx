import FooterPages from "@/components/shared/footer-pages";
import { sampleBlogMd } from "@/data/blogs";
import {
  disclaimer,
  shippingAndDeliveryPolicy,
  termsAndConditions,
} from "@/data/footer-pages";

const DisclaimerPage = () => {
  return <FooterPages heading="Disclaimer" content={disclaimer} />;
};

export default DisclaimerPage;
