import { useParams } from "react-router-dom";
import { BlogHeaderData } from "../../../data";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = BlogHeaderData.find((b) => b.id === id);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div className="lg:p-10 md:p-10 p-5">
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="w-full lg:h-[25rem] object-cover"
      />
      <h1 className="text-4xl font-bold mt-8">{blog.title}</h1>
      <p className="text-sm text-gray-500 py-2">
        By {blog.author} | {blog.date}
      </p>
      <div className="mt-8">
        <p>{blog.fullContent}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
