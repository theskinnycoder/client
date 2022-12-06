import React from "react";
import { NavLink } from "react-router-dom";
import {
  LoginIcon,
  LogoutIcon,
  UserCircleIcon,
  HomeIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import useAuth from "../hooks/useAuth";

export default function Header() {
  const { user, authLoading, logout } = useAuth();

  return (
    <header className="backdrop-blur sticky inset-x-0 top-0 p-5 mx-auto bg-transparent">
      <nav className="flex items-center justify-between max-w-4xl mx-auto">
        <NavLink to="/" className="text-xl font-medium">
          Blogger
        </NavLink>
        <ul className="flex items-center justify-center space-x-10">
          <li>
            <NavLink
              to="/"
              className="hover:ring-2 ring-black flex items-center space-x-2 rounded p-1.5 duration-300 transition ease-in-out"
            >
              <HomeIcon className="w-6 h-6" />
              <span>home</span>
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                to="/blogs/new"
                className="hover:ring-2 ring-black flex items-center space-x-2 rounded p-1.5 duration-300 transition ease-in-out"
              >
                <PlusIcon className="w-6 h-6" />
                <span>blog</span>
              </NavLink>
            </li>
          )}
          {authLoading ? (
            <li>
              <div className="flex items-center space-x-2 rounded p-1.5">
                <UserCircleIcon className="w-6 h-6" />
                <span>loading...</span>
              </div>
            </li>
          ) : !user ? (
            <li>
              <NavLink
                to="/login"
                className="hover:ring-2 ring-black flex items-center space-x-2 rounded p-1.5 duration-300 transition ease-in-out"
              >
                <LoginIcon className="w-6 h-6" />
                <span>login</span>
              </NavLink>
            </li>
          ) : (
            <li>
              <button
                className="hover:ring-2 ring-black flex items-center space-x-2 rounded p-1.5 duration-300 transition ease-in-out"
                onClick={logout}
              >
                <LogoutIcon className="w-6 h-6" />
                <span>logout</span>
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
