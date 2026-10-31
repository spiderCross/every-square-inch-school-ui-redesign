"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";
type Props = ComponentProps<typeof Link> & {
  className?: string;
  children: ReactNode;
  eventName: string;
  payload?: Record<string, string>;
};

export function TrackedLink({
  className,
  children,
  eventName,
  payload,
  ...linkProps
}: Props) {
  return (
    <Link
      {...linkProps}
      className={className}
      onClick={(event) => {
        linkProps.onClick?.(event);
        trackEvent(eventName, payload);
      }}
    >
      {children}
    </Link>
  );
}
