import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_SERVER_URL } from "../constants";

export default function useBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(`${BASE_SERVER_URL}/api/blogs/${id}`);
      const { data } = await response.json();
      setBlog(data);
    })();
  }, [id]);

  async function updateBlog(blog) {
    try {
      const response = await fetch(`${BASE_SERVER_URL}/api/blogs/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });
      const { data } = await response.json();
      setBlog(data?.blog);
      return {
        data: "Blog updated successfully",
        error: null,
      };
    } catch (error) {
      return { data: null, error };
    }
  }

  async function deleteBlog() {
    try {
      const response = await fetch(`${BASE_SERVER_URL}/api/blogs/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const { data } = await response.json();
      if (!response.ok) {
        return {
          data: null,
          error: data?.error,
        };
      } else {
        return {
          data: "Blog deleted successfully",
          error: null,
        };
      }
    } catch (error) {
      return { data: null, error };
    }
  }

  return {
    blog,
    updateBlog,
    deleteBlog,
  };
}
