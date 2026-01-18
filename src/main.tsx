
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import { Toaster } from "./app/components/ui/toaster";
  import './api/supabase-migrate'; // Auto-migrate to Supabase

  createRoot(document.getElementById("root")!).render(
    <>
      <App />
      <Toaster />
    </>
  );
  