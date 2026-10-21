// Five equal petals in a regular pentagon: the fields P/ PRABHAVEE practises at the intersection of (deck, "Who we are").
// Decorative: the same five fields are stated in the text beside it, so it is hidden from screen readers.
// Perfect five-fold symmetry: same petal size, same label distance and same label size for every field.
// Checked by measuring each rendered label against the circles: it sits inside its own petal and clear of its neighbours.
const FIELDS = [["Public", "policy"], ["Law"], ["Communication"], ["Society"], ["Business", "strategy"]];

export default function IntersectionGraphic() {
  const cx = 320, cy = 315, d = 155, r = 140, lr = 222, lh = 19;
  return (
    <svg className="ix" viewBox="27 14 586 572" aria-hidden="true" focusable="false">
      {FIELDS.map((lines, i) => {
        const a = (-90 + i * 72) * (Math.PI / 180);
        const x = cx + d * Math.cos(a), y = cy + d * Math.sin(a);
        const lx = cx + lr * Math.cos(a), ly = cy + lr * Math.sin(a);
        const top = ly - ((lines.length - 1) * lh) / 2 + 5;
        return (
          <g key={i} className="ix-f">
            <circle cx={x.toFixed(1)} cy={y.toFixed(1)} r={r} />
            <text className="ix-n" x={lx.toFixed(1)} y={(top - 26).toFixed(1)} textAnchor="middle">{String(i + 1).padStart(2, "0")}</text>
            <text className="ix-l" x={lx.toFixed(1)} y={top.toFixed(1)} textAnchor="middle">
              {lines.map((t, k) => <tspan key={k} x={lx.toFixed(1)} dy={k === 0 ? 0 : lh}>{t}</tspan>)}
            </text>
          </g>
        );
      })}
      <circle className="ix-core" cx={cx} cy={cy} r="42" />
      <text className="ix-mark" x={cx} y={cy + 15} textAnchor="middle"><tspan>P</tspan><tspan className="ix-slash">/</tspan></text>
    </svg>
  );
}
