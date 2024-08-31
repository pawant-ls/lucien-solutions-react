import BlogsPageComponent from "@/components/blogs/blogs";
import { blogsData } from "@/handlers/blogs";

const BlogsPage = async () => {
  const data = await blogsData();
  return <BlogsPageComponent data={data} />;
};

export default BlogsPage;
