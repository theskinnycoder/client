import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function RegisterPage() {
  const { register, authLoading } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submitForm(event) {
    event.preventDefault();
    const user = {
      username,
      email,
      password,
    };
    await register(user);
    navigate("/");
  }

  return (
    <form
      className="flex flex-col items-baseline min-w-full space-y-5"
      onSubmit={submitForm}
    >
      <h1 className="text-5xl font-extrabold">Register.</h1>
      <p className="text-sm">
        Already have an account?{" "}
        <Link to="/login" className="hover:underline font-medium">
          Login
        </Link>
      </p>
      <div className="w-1/2 space-y-1">
        <label className="block text-sm font-semibold" htmlFor="username">
          Username <sup className="text-red-500">*</sup>
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="min-w-full text-sm rounded"
          type="text"
          id="username"
          required
        />
      </div>
      <div className="w-1/2 space-y-1">
        <label className="block text-sm font-semibold" htmlFor="email">
          Email <sup className="text-red-500">*</sup>
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-full text-sm rounded"
          type="email"
          id="email"
          required
        />
      </div>
      <div className="w-1/2 space-y-1">
        <label className="block text-sm font-semibold" htmlFor="password">
          Password <sup className="text-red-500">*</sup>
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="min-w-full text-sm rounded"
          type="password"
          id="password"
          required
        />
      </div>
      <button
        type="submit"
        className="hover:text-white hover:bg-black px-4 py-2 text-sm font-semibold text-black border-2 border-black rounded"
        disabled={authLoading}
      >
        {!authLoading ? "Register" : "Loading..."}
      </button>
    </form>
  );
}
