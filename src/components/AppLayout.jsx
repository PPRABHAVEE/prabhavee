"use client";
import { useState, useEffect } from "react";
import Loader from "@/app/loader";

export default function AppLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;
  return <>{children}</>;
}
