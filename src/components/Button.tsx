import type { ReactNode } from "react";

export default function Button({
  func,
  children,
}: {
  func?: any;
  children: ReactNode;
}) {
  return (
    <button
      onClick={func}
      className="transition before:content-['['] m-2 before:text-sec after:text-sec font-bold font-jetbrains uppercase hover:after:text-text hover:before:text-text after:content-[']'] text-text hover:text-main"
    >
      {children}
    </button>
  );
}
