import BlogPage from "@/components/blogs/blog-page";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Blogs | Lucien Solutions",
});
const Blog = () => {
  return <BlogPage />;
};

export default Blog;
