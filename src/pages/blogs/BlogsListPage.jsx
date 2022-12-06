import BlogItem from "../../components/BlogItem";
import useBlogs from "../../hooks/useBlogs";

export default function BlogsListPage() {
  const { blogs } = useBlogs();

  return (
    <section className="flex flex-col items-start space-y-10">
      <h1 className="text-5xl font-extrabold">Blogs.</h1>
      <ul className="flex flex-col items-start w-full space-y-6">
        {blogs?.map((blog) => (
          <BlogItem key={blog._id} blog={blog} />
        ))}
      </ul>
    </section>
  );
}
