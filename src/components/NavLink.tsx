import type { ReactNode } from "react";
import { useNavigate } from "react-router";

export default function NavLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  const navigate = useNavigate();

  let active = "";

  if (window.location.pathname !== to) {
    active =
      "before:content-['['] after:content-[']'] before:text-text hover:before:text-text-disabled after:text-text hover:after:text-text-disabled text-text-disabled hover:text-text";
  } else {
    active =
      "before:content-['{'] after:content-['}'] before:text-main after:text-main";
  }

  return (
    <>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
          navigate(to);
        }}
        className={`transition last:mr-0 mr-4 ${active}`}
      >
        {children}
      </button>
    </>
  );
}
