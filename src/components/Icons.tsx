import type { ReactNode } from "react";

export type IconName =
  | "check"
  | "arrowRight"
  | "arrowLeft"
  | "download"
  | "menu"
  | "x"
  | "chevronDown"
  | "mapPin"
  | "phone"
  | "mail"
  | "shield"
  | "plane"
  | "bookOpen"
  | "users"
  | "globe"
  | "flask"
  | "mountain"
  | "factory"
  | "graduationCap"
  | "passport"
  | "fileText"
  | "wallet"
  | "smartphone"
  | "lifeBuoy"
  | "backpack"
  | "camera"
  | "target"
  | "heart"
  | "alertTriangle"
  | "clipboard"
  | "building"
  | "leaf"
  | "notebook"
  | "sparkles"
  | "linkedin"
  | "instagram"
  | "facebook"
  | "youtube"
  | "whatsapp";

const icons: Record<IconName, ReactNode> = {
  check: <path d="M20 6 9 17l-5-5" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowLeft: <path d="M19 12H5M11 18l-6-6 6-6" />,
  download: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5M12 15V3" />
    </>
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  x: <path d="M18 6 6 18M6 6l12 12" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  mapPin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  ),
  mail: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
  plane: (
    <path d="M17.8 19.2 16 11l3.5-3.5a2.12 2.12 0 0 0-3-3L13 8 4.8 6.2a.9.9 0 0 0-.9 1.5L9 12l-3 3-2-1-1 1 3 2 2 3 1-1-1-2 3-3 4.3 5.1a.9.9 0 0 0 1.5-.9Z" />
  ),
  bookOpen: (
    <>
      <path d="M2 6h7a3 3 0 0 1 3 3v11H5a3 3 0 0 0-3 3V6Z" />
      <path d="M22 6h-7a3 3 0 0 0-3 3v11h7a3 3 0 0 1 3 3V6Z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M14 20a4.5 4.5 0 0 1 7 0" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15 15 0 0 1 0 20" />
      <path d="M12 2a15 15 0 0 0 0 20" />
    </>
  ),
  flask: (
    <>
      <path d="M10 2v5l-6 10a3 3 0 0 0 2.6 4.5h10.8A3 3 0 0 0 20 17L14 7V2" />
      <path d="M8 13h8" />
    </>
  ),
  mountain: (
    <>
      <path d="M3 20 10 8l4 7 3-5 4 10H3Z" />
      <path d="m10 8 1.5 2.5L13 8" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V9l6 3V9l6 3V5l6 3v13H3Z" />
      <path d="M7 21v-4M12 21v-4M17 21v-4" />
    </>
  ),
  graduationCap: (
    <>
      <path d="m2 9 10-5 10 5-10 5-10-5Z" />
      <path d="M6 11v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
    </>
  ),
  passport: (
    <>
      <rect x="4" y="3" width="14" height="18" rx="2" />
      <circle cx="11" cy="12" r="3" />
      <path d="M18 7h2M18 11h2M18 15h2" />
    </>
  ),
  fileText: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6M8 13h8M8 17h6" />
    </>
  ),
  wallet: (
    <>
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <path d="M16 12h6M17 12h.01M5 10h8" />
    </>
  ),
  smartphone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 5h2M12 18h.01" />
    </>
  ),
  lifeBuoy: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M5.6 5.6l3.2 3.2M15.2 15.2l3.2 3.2M18.4 5.6l-3.2 3.2M8.8 15.2l-3.2 3.2" />
    </>
  ),
  backpack: (
    <>
      <path d="M7 21V9a5 5 0 0 1 10 0v12H7Z" />
      <path d="M9 9V7a3 3 0 0 1 6 0v2M9 13h6M9 17h6" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7l1.5-2h5L16 7" />
      <circle cx="12" cy="13.5" r="3.5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  heart: (
    <path d="M20.8 8.5a5 5 0 0 0-8-3.7 5 5 0 0 0-8 3.7c0 5.8 8 11.5 8 11.5s8-5.7 8-11.5Z" />
  ),
  alertTriangle: (
    <>
      <path d="M12 3 2.4 20h19.2L12 3Z" />
      <path d="M12 9v5M12 17h.01" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="18" rx="2" />
      <path d="M9 4.5h6v3H9zM9 13l2 2 4-4" />
    </>
  ),
  building: (
    <>
      <path d="M4 21h16M6 21V5h12v16" />
      <path d="M9 9h2M13 9h2M9 13h2M13 13h2M11 21v-4h2v4" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4C11 4 5 8.5 5 16a4 4 0 0 0 4 4c7.5 0 12-6 12-15Z" />
      <path d="M8 16c2-2 5-4 9-5" />
    </>
  ),
  notebook: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 3v18M11 8h6M11 12h6M11 16h4" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m7 7 2 2M15 15l2 2M17 7l-2 2M9 15l-2 2" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </>
  ),
  facebook: (
    <path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1Z" />
  ),
  youtube: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="3" />
      <path d="m10 9 5 3-5 3z" fill="currentColor" />
    </>
  ),
  whatsapp: (
    <path
      d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z"
      fill="#000000"
    ></path>
  ),
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}
