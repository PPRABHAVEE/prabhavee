"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// The stakeholder page now lives inside Strategic milestones. Kept so the old address still resolves.
export default function Stakeholder() {
  const router = useRouter();
  useEffect(() => { router.replace("/journey#stakeholder"); }, [router]);
  return (
    <section className="sec"><div className="wrap">
      <h1>This page has moved.</h1>
      <p>Stakeholder engagement and initiatives is now part of <Link className="link" href="/journey#stakeholder">Strategic milestones</Link>.</p>
    </div></section>
  );
}
