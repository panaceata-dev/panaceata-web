"use client";

import { useReveal } from "@/hooks/useReveal";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RevealProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [key, setKey] = useState(0);

  // Re-run observer when route changes
  useEffect(() => {
    setKey((k) => k + 1);
  }, [pathname]);

  return <RevealInner key={key}>{children}</RevealInner>;
}

function RevealInner({ children }: { children: React.ReactNode }) {
  useReveal();
  return <>{children}</>;
}
