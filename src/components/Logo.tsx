export default function Logo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect x="1" y="1" width="30" height="30" rx="8" fill="none" stroke="currentColor" strokeOpacity=".35" />
      <path d="M9 23V9l14 14V9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="9" r="2.4" fill="var(--accent)" />
      <circle cx="23" cy="23" r="2.4" fill="var(--accent)" />
    </svg>
  );
}
