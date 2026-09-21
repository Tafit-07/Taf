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
      "before:content-['['] after:content-[']'] before:text-sec hover:before:text-text after:text-sec hover:after:text-text text-text hover:text-main";
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
        className={`transition last:mr-0 mr-4 font-extrabold font-jetbrains ${active}`}
      >
        {children}
      </button>
    </>
  );
}
