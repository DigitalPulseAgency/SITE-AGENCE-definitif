import React from 'react';

export default function InstagramLogo({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDC80" />
          <stop offset="25%" stopColor="#FCAF45" />
          <stop offset="50%" stopColor="#F77737" />
          <stop offset="75%" stopColor="#E1306C" />
          <stop offset="100%" stopColor="#833AB4" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#instagram-gradient)" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
    </svg>
  );
}
