import { useNavigate } from "react-router";

export default function NavLink({
  to,
  children,
  invert,
}: {
  to: string;
  children: any;
  invert?: boolean;
}) {
  let navigate = useNavigate();

  let active = "";
  if (invert) {
    if (window.location.pathname !== to) {
      active = "bg-main border-main text-text";
    } else {
      active = "border-main";
    }
  } else {
    if (window.location.pathname === to) {
      active = "bg-main text-text border-main";
    }
  }
  return (
    <>
      <button
        onClick={() => {
          navigate(to);
        }}
        className={`transition rounded-lg px-1 border-bg border-2 mr-1 last:mr-0 ${active}`}
      >
        {children}
      </button>
    </>
  );
}
