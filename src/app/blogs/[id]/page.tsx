import BlogPage from "@/components/blogs/blog-page";
import { blogData } from "@/handlers/blogs";
import { metaTagsGenerator } from "@/lib/seo";
export const metadata = metaTagsGenerator({
  title: "Blogs | Lucien Solutions",
});
const Blog = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  console.log(params.id);
  const data = await blogData(params.id);
  return <BlogPage data={data} />;
};

export default Blog;
