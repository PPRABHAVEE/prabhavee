import PolicyPage from "@/components/site/PolicyPage";
import policies from "@/content/policies.json";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("Cookie Notice", "Cookie Notice for P/ PRABHAVEE. Last updated October 2026.", "/cookie-notice");

export default function Page() { return <PolicyPage policy={policies["cookie-notice"]} />; }
