import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import AuthContextProvider from "./contexts/AuthContext";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.querySelector("#root"));

root.render(
  <StrictMode>
    <AuthContextProvider>
      <div className="bg-slate-50 min-h-screen">
        <App />
      </div>
    </AuthContextProvider>
  </StrictMode>
);

reportWebVitals();
