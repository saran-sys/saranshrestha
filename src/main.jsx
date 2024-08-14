import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <main className="bg-black text-white p-4 -z-30">
    <App />
  </main>
);
