import NavLink from "./NavLink.tsx";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

export default function Nav() {
  const navigate = useNavigate();
  const [top, setTop] = useState(false);

  useEffect(() => {
    const scrollEvent = () => {
      if (window.scrollY === 0) {
        setTop(false);
      } else {
        setTop(true);
      }
    };
    window.addEventListener("scroll", scrollEvent);
  }, [top]);

  return (
    <nav
      className={`fixed transition-[top] w-dvw hover:top-0 z-20 ${top ? "-top-20" : "top-0"}`}
    >
      <div className="relative">
        <div id="buffer" className="absolute translate-y-18 h-20 w-full"></div>
        <div className="w-dvw z-20">
          <div className="flex justify-between border-b-4 bg-bg border-sec p-4">
            <div className="text-3xl">
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="before:content-['<'] after:content-['/>'] before:text-main after:text-main"
              >
                TAF_
              </button>
            </div>
            <div className="text-2xl"></div>
            <div className="text-2xl flex flex-row">
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/projects">PROJECTS</NavLink>
              <NavLink to="/cv">CV</NavLink>
              <NavLink to="/about">ABOUT</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
