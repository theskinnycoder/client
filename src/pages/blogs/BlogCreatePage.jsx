import { useState } from "react";
import useBlogs from "../../hooks/useBlogs";

export default function BlogCreatePage() {
  const [formState, setFormState] = useState({
    title: "",
    content: "",
    overview: "",
    image: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  }

  const { createBlog } = useBlogs();

  async function submitForm(event) {
    event.preventDefault();
    await createBlog(formState);
  }

  return (
    <form
      className="flex flex-col items-baseline min-w-full space-y-5"
      onSubmit={submitForm}
    >
      <h1 className="mb-5 text-5xl font-extrabold">Create a Blog.</h1>
      <div className="w-1/2 space-y-1">
        <label className="block text-sm font-semibold" htmlFor="title">
          Title <sup className="text-red-500">*</sup>
        </label>
        <input
          name="title"
          value={formState.title}
          onChange={handleChange}
          className="min-w-full text-sm rounded"
          type="text"
          id="title"
          required
        />
      </div>
      <div className="w-1/2 space-y-1">
        <label className="block text-sm font-semibold" htmlFor="overview">
          Overview
        </label>
        <input
          name="overview"
          value={formState.overview}
          onChange={handleChange}
          className="min-w-full text-sm rounded"
          type="text"
          id="overview"
        />
      </div>
      <div className="w-1/2 space-y-1">
        <label className="block text-sm font-semibold" htmlFor="image">
          Cover Image
        </label>
        <input
          name="image"
          value={formState.image}
          onChange={handleChange}
          className="min-w-full text-sm rounded"
          type="file"
          id="image"
        />
      </div>
      <div className="w-1/2 space-y-1">
        <label className="block text-sm font-semibold" htmlFor="content">
          Content <sup className="text-red-500">*</sup>
        </label>
        <textarea
          name="content"
          value={formState.content}
          onChange={handleChange}
          className="min-w-full text-sm rounded"
          id="content"
          required
        />
      </div>
      <button
        type="submit"
        className="hover:text-white hover:bg-black px-4 py-2 text-sm font-semibold text-black border-2 border-black rounded"
      >
        Create
      </button>
    </form>
  );
}
