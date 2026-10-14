// The stakeholder page moved into Strategic milestones. Keep the old address out of the index and point to the new one.
export const metadata = {
  title: "Stakeholder engagement (moved)",
  description: "Stakeholder engagement and initiatives now sit inside Strategic milestones.",
  alternates: { canonical: "https://www.prabhaveepfsi.org/journey" },
  robots: { index: false, follow: true },
};

export default function StakeholderLayout({ children }) {
  return children;
}
