import PolicyPage from "@/components/site/PolicyPage";
import policies from "@/content/policies.json";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("Website Disclaimer", "Website Disclaimer for P/ PRABHAVEE. Last updated October 2026.", "/disclaimer");

export default function Page() { return <PolicyPage policy={policies["disclaimer"]} />; }
