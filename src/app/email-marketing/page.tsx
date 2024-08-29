import EmailMarketing from "@/components/our-services/email-marketing";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Email Marketing | Lucien Solutions",
});
const EmailMarketingPage = () => {
  return <EmailMarketing />;
};

export default EmailMarketingPage;
