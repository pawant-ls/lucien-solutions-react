import PayPerClickComponent from "@/components/our-services/pay-per-click";
import { singlePackagePlan } from "@/handlers/package-plans";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Pay Per Click | Lucien Solutions",
});
const PayPerClick = async () => {
  const data = await singlePackagePlan("socialMediaMarketing");
  return <PayPerClickComponent data={data}/>;
};

export default PayPerClick;
