const PATHS = {
  sparkle: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
      <circle cx="8.5" cy="14" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="12" cy="14" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="14" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  brain: (
    <>
      <path d="M9.5 4.5a3 3 0 0 0-3 3v.5a2.5 2.5 0 0 0-1 4.7v.6A3 3 0 0 0 9 16.5a2.7 2.7 0 0 0 3 .5 2.7 2.7 0 0 0 3-.5 3 3 0 0 0 3.5-3.2v-.6a2.5 2.5 0 0 0-1-4.7V7.5a3 3 0 0 0-3-3 2.7 2.7 0 0 0-2.5 1.3A2.7 2.7 0 0 0 9.5 4.5Z" />
      <path d="M12 6v13M9 10c1 .5 2 .5 3 0M15 10c-1 .5-2 .5-3 0M8 14c1.2.6 2.7.6 4 0M16 14c-1.2.6-2.7.6-4 0" />
    </>
  ),
  alert: (
    <>
      <path d="M10.3 3.9 2.5 17.4A2 2 0 0 0 4.2 20.5h15.6a2 2 0 0 0 1.7-3.1L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9.5v4.5" />
      <circle cx="12" cy="17" r="0.7" fill="currentColor" stroke="none" />
    </>
  ),
  bag: (
    <>
      <path d="M6 9h12l-.7 10.2A2 2 0 0 1 15.3 21H8.7a2 2 0 0 1-2-1.8L6 9Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      <path d="M10 14h4" />
    </>
  ),
  pot: (
    <>
      <path d="M4 9h16" />
      <path d="M5 9v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9" />
      <path d="M3 9h18" />
      <path d="M9 5c-.5 1 .5 1.5 0 2.5M12 4c-.5 1 .5 1.5 0 2.5M15 5c-.5 1 .5 1.5 0 2.5" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="4.5" width="12" height="16.5" rx="2" />
      <rect x="9" y="2.5" width="6" height="3.5" rx="1" />
      <path d="M9 11h6M9 14.5h6M9 18h4" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14.5c1 1.3 2.3 2 3.5 2s2.5-.7 3.5-2" />
      <circle cx="9" cy="10" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  scroll: (
    <>
      <path d="M6 4h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4Z" />
      <path d="M6 4a2 2 0 0 0-2 2v1h2M19 17v1a2 2 0 0 1-2 2" />
      <path d="M9 9h7M9 12.5h7M9 16h4" />
    </>
  ),
  quote: (
    <>
      <path d="M5 11c0-3 2-5 4.5-5.5M5 11v6h5v-6H5ZM14 11c0-3 2-5 4.5-5.5M14 11v6h5v-6h-5Z" />
    </>
  ),
  handHeart: (
    <>
      <path d="M11 6.5a2.4 2.4 0 0 0-4 1.3 2.4 2.4 0 0 0 .8 2L11 13l3.2-3.2a2.4 2.4 0 0 0 .8-2A2.4 2.4 0 0 0 11 6.5Z" />
      <path d="M4 14v4a2 2 0 0 0 2 2h9l5-3.5a1.5 1.5 0 0 0-1.7-2.5L15 16M11 17h3" />
    </>
  ),
  arrowLeft: <path d="M14 6l-6 6 6 6" />,
  arrowRight: <path d="M10 6l6 6-6 6" />,
  refresh: (
    <>
      <path d="M4 12a8 8 0 0 1 13.6-5.7L20 8M20 4v4h-4" />
      <path d="M20 12a8 8 0 0 1-13.6 5.7L4 16M4 20v-4h4" />
    </>
  ),
  dot: <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />,
  pause: <path d="M9 5v14M15 5v14" />,
  play: <path d="M7 4l13 8L7 20V4Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M8 14a5 5 0 1 1 8 0c-.7.8-1 1.5-1 2.5V18H9v-1.5c0-1-.3-1.7-1-2.5Z" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  chevronRight: <path d="M9 6l6 6-6 6" />,
  printer: (
    <>
      <path d="M7 9V4h10v5" />
      <rect x="4" y="9" width="16" height="8" rx="2" />
      <rect x="7" y="14" width="10" height="6" rx="1" />
      <circle cx="17" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  eight: (
    <>
      <circle cx="12" cy="9" r="3.5" />
      <circle cx="12" cy="16" r="3.5" />
    </>
  ),
  flame: (
    <>
      <path d="M12 3c1 3 4 5 4 8a4 4 0 0 1-8 0c0-1.5.5-2.5 1.5-3.5 0 1.5 1 2 1.5 2 0-3 .5-4.5 1-6.5Z" />
    </>
  ),
};

export function Icon({ name, size = 18, strokeWidth = 1.75, style, ...props }) {
  const path = PATHS[name];
  if (!path) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      style={{ display: "block", flexShrink: 0, ...style }}
      {...props}
    >
      {path}
    </svg>
  );
}
