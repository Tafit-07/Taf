import type { ReactNode } from "react";

export default function Title({
  title,
  children,
}: {
  title: number;
  children: ReactNode;
}) {
  let content = 0;
  for (let i = 0; i < title; i++) {
    content += 1;
  }
  return (
    <h2
      className={`title-${content} first:mt-0 mt-6 w-fit mb-1 font-bold before:text-main before:mr-1`}
    >
      {children}
    </h2>
  );
}
