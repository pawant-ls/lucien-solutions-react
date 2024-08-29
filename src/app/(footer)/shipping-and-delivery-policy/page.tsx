import FooterPages from "@/components/shared/footer-pages";
import { sampleBlogMd } from "@/data/blogs";
import { shippingAndDeliveryPolicy, termsAndConditions } from "@/data/footer-pages";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Shipping and Delivery | Lucien Solutions",
});
const ShippingAndDeliveryPolicy = () => {
  return (
    <FooterPages
      heading="Shipping and Delivery Policy"
      content={shippingAndDeliveryPolicy}
    />
  );
};

export default ShippingAndDeliveryPolicy;
