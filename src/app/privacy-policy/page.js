import PolicyPage from "@/components/site/PolicyPage";
import policies from "@/content/policies.json";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("Privacy Policy", "Privacy Policy for P/ PRABHAVEE. Last updated October 2026.", "/privacy-policy");

export default function Page() { return <PolicyPage policy={policies["privacy-policy"]} />; }
