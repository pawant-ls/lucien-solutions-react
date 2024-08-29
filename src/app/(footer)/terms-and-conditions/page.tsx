import FooterPages from "@/components/shared/footer-pages";
import { sampleBlogMd } from "@/data/blogs";
import { termsAndConditions } from "@/data/footer-pages";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Terms & Conditions | Lucien Solutions",
});
const TermsAndCondition = () => {
  return (
    <FooterPages
      heading="Terms & Conditions"
      subHeading="TERMS OF SERVICE "
      content={termsAndConditions}
    />
  );
};

export default TermsAndCondition;
