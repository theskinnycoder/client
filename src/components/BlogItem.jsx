import { Link } from "react-router-dom";

export default function BlogItem({ blog }) {
  return (
    <Link
      to={`/blogs/${blog._id}`}
      className="flex flex-col items-start min-w-full p-4 space-y-3 border-[1.5px] rounded hover:border-black duration-300 transition ease-in-out"
    >
      <h1 className="text-2xl font-bold">{blog?.title}</h1>
      <span className="text-xs font-semibold">{blog?.createdAt}</span>
      <p className="text-md text-opacity-50">{blog?.overview}</p>
    </Link>
  );
}
