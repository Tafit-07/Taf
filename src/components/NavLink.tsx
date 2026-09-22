import type { ReactNode } from "react";
import { useNavigate } from "react-router";

export default function NavLink({
  to,
  func,
  children,
}: {
  to: string;
  func?: any;
  children: ReactNode;
}) {
  const navigate = useNavigate();
  const funci = func;

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
          funci();
          window.scrollTo(0, 0);
          navigate(to);
        }}
        className={`transition last:mr-0 mr-4 font-extrabold hover:scale-160 py-4 uppercase font-jetbrains ${active}`}
      >
        {children}
      </button>
    </>
  );
}
