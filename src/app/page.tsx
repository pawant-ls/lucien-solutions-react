import { metaTagsGenerator } from "@/lib/seo";
import HomePage from "../components/home/home";
export const metadata = metaTagsGenerator({
  title: "Home | Lucien Solutions",
});

export default function Home() {
  return <HomePage />;
}
