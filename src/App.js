import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogsListPage from "./pages/blogs/BlogsListPage";
import Header from "./components/Header";
import BlogCreatePage from "./pages/blogs/BlogCreatePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import BlogDetailsPage from "./pages/blogs/BlogDetailsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="md:px-0 max-w-4xl px-4 py-6 mx-auto">
        <Routes>
          <Route path="/" element={<BlogsListPage />} />
          <Route path="/blogs" element={<BlogsListPage />} />
          <Route path="/blogs/new" element={<BlogCreatePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/blogs/:id" element={<BlogDetailsPage />} />
          {/* <Route path="/blogs/:id/edit" element={<BlogEdit />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
