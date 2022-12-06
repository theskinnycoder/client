import React from "react";
import useBlog from "../../hooks/useBlog";

export default function BlogDetailsPage() {
  const { blog } = useBlog();

  return (
    <article className="flex flex-col items-start w-full space-y-5">
      <h1 className="text-5xl font-bold">{blog?.title}</h1>
      <p className="text-sm opacity-50">{blog?.overview}</p>
      <p className="text-md">{blog?.content}</p>
    </article>
  );
}
