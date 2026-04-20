import { ReactNode } from "react";

interface MetaTagsProps {
  children: ReactNode;
}

export default function MetaTags({ children }: MetaTagsProps) {
  return <>{children}</>;
}
