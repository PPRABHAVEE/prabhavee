export default function Orbit() {
  return (
    <div className="orbit" role="img" aria-label="Four areas around one purpose: legal advisory, capacity building, social impact and policy research">
      <svg viewBox="0 0 400 400" aria-hidden="true">
        <circle className="ring" cx="200" cy="200" r="150" strokeWidth="2" />
        <circle className="ring dash" cx="200" cy="200" r="108" strokeWidth="2" />
        <circle className="ring" cx="200" cy="200" r="66" strokeWidth="1" strokeOpacity=".4" />
        <circle cx="200" cy="200" r="38" fill="#ffffff14" stroke="#fff" strokeOpacity=".8" />
        <circle cx="200" cy="200" r="22" fill="none" stroke="#fff" strokeWidth="1.5" />
        <circle className="core" cx="200" cy="200" r="9" />
        <circle className="dot" cx="104" cy="122" r="3.5" />
        <circle className="dot" cx="300" cy="288" r="3.5" />
        <g className="nodes">
          <g className="node"><circle cx="200" cy="50" r="24" /><g className="ic"><path d="M200 38v24M190 62h20M193 44h14M193 44l-6 11a6 6 0 0 0 12 0zM207 44l-6 11a6 6 0 0 0 12 0z" /></g></g>
          <g className="node"><circle cx="350" cy="200" r="24" /><g className="ic"><circle cx="346" cy="195" r="4.5" /><path d="M337 211c0-5 4-8 9-8s9 3 9 8M354 192a4 4 0 1 1 0 7M358 204c4 1 6 4 6 7" /></g></g>
          <g className="node"><circle cx="200" cy="350" r="24" /><g className="ic"><circle cx="200" cy="350" r="11" /><path d="M189 350h22M200 339c-5 5-5 17 0 22M200 339c5 5 5 17 0 22" /></g></g>
          <g className="node"><circle cx="50" cy="200" r="24" /><g className="ic"><path d="M50 207v-14c-3-3-9-3-13-1v14c4-2 10-2 13 1zM50 207v-14c3-3 9-3 13-1v14c-4-2-10-2-13 1z" /></g></g>
        </g>
      </svg>
    </div>
  );
}
