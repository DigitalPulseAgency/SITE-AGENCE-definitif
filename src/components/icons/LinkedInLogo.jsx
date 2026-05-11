import React from 'react';

export default function LinkedInLogo({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        d="M6.5 9h2.5v8h-2.5v-8zm1.25-4a1.45 1.45 0 1 1 0 2.9 1.45 1.45 0 0 1 0-2.9zm3.25 4h2.4v1.1h.04c.33-.63 1.15-1.3 2.37-1.3 2.53 0 3 1.66 3 3.83V17h-2.5v-3.6c0-.86-.02-1.96-1.2-1.96-1.2 0-1.38.94-1.38 1.9V17h-2.5v-8z"
        fill="white"
      />
    </svg>
  );
}
