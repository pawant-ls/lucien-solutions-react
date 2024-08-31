import EmailMarketing from "@/components/our-services/email-marketing";
import { singlePackagePlan } from "@/handlers/package-plans";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Email Marketing | Lucien Solutions",
});
const EmailMarketingPage = async () => {
  const data = await singlePackagePlan("emailMarketing");
  return <EmailMarketing data={data} />;
};

export default EmailMarketingPage;
