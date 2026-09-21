import type { ReactNode } from "react";

export default function Title({
  title,
  children,
}: {
  title: number;
  children: ReactNode;
}) {
  let content = 0;
  let hash = "";
  for (let i = 0; i < title; i++) {
    content += 1;
    hash += "#";
  }
  return (
    <h2
      className={`title-${content} uppercase flex w-fit font-jetbrains font-extrabold`}
    >
      <span className="text-main select-none">{hash}</span>
      {children}
    </h2>
  );
}
