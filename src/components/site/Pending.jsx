// Review marker shown only in preview builds (NEXT_PUBLIC_SHOW_PENDING=1). Production builds render nothing.
export default function Pending({ title, children }) {
  if (process.env.NEXT_PUBLIC_SHOW_PENDING !== "1") return null;
  return (
    <div className="pending">
      <b>Pending: {title}</b>
      {children}
    </div>
  );
}
