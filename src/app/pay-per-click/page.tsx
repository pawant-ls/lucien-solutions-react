import PayPerClickComponent from "@/components/our-services/pay-per-click";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Pay Per Click | Lucien Solutions",
});
const PayPerClick = () => {
  return <PayPerClickComponent />;
};

export default PayPerClick;
