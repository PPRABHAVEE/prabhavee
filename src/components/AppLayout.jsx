"use client";
import { useState, useEffect } from "react";
import Loader from "@/app/loader";

export default function AppLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    const handleSelect = (e) => e.preventDefault();
    document.addEventListener("selectstart", handleSelect);

    const handleCopy = (e) => e.preventDefault();
    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("selectstart", handleSelect);
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;
  return <>{children}</>;
}
