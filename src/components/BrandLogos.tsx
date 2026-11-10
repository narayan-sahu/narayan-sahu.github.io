import type { ReactElement } from "react";

function Microsoft() {
  return (
    <svg width="26" height="26" viewBox="0 0 23 23" aria-hidden="true" focusable="false">
      <path fill="#F25022" d="M1 1h10v10H1z" />
      <path fill="#7FBA00" d="M12 1h10v10H12z" />
      <path fill="#00A4EF" d="M1 12h10v10H1z" />
      <path fill="#FFB900" d="M12 12h10v10H12z" />
    </svg>
  );
}

function Google() {
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

// Simplified AWS-style mark: "aws" wordmark with the orange smile.
// The text uses the theme's text color so it stays visible in dark and light mode.
function Aws() {
  return (
    <svg width="32" height="22" viewBox="0 0 48 32" aria-hidden="true" focusable="false">
      <text
        x="24"
        y="16"
        textAnchor="middle"
        fontSize="19"
        fontWeight="700"
        fontFamily="Arial, Helvetica, sans-serif"
        fill="var(--text)"
      >
        aws
      </text>
      <path d="M8 22c10 6 22 6 32 0" fill="none" stroke="#FF9900" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M36.5 20.5 40.5 22.4 39 26.6" fill="none" stroke="#FF9900" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const brands: Record<string, () => ReactElement> = {
  Microsoft,
  "Google Cloud": Google,
  "Amazon Web Services": Aws,
};

// Returns the logo for a known issuer, or null so the caller can use a fallback.
export function getBrandLogo(issuer: string): ReactElement | null {
  const Logo = brands[issuer];
  return Logo ? <Logo /> : null;
}
