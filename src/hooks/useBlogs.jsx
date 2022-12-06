import { useEffect, useState } from "react";
import { BASE_SERVER_URL } from "../constants";

export default function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${BASE_SERVER_URL}/api/blogs`);
      const { data } = await response.json();
      setBlogs(data);
    })();
  }, []);

  async function createBlog(blog) {
    try {
      const response = await fetch(`${BASE_SERVER_URL}/api/blogs`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });
      const data = await response.json();
      if (!response.ok) {
        return {
          data: null,
          error: data?.error,
        };
      } else {
        setBlogs([...blogs, data?.blog]);
        return {
          data: "Blog created successfully",
          error: null,
        };
      }
    } catch (error) {
      return { data: null, error };
    }
  }

  return {
    blogs,
    createBlog,
  };
}
