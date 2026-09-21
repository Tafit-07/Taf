import NavLink from "./NavLink.tsx";
import { useNavigate } from "react-router";
import { useState, useEffect, useContext } from "react";
import { NavContext } from "../App.tsx";

export default function Nav() {
  const navigate = useNavigate();
  const [top, setTop] = useState(false);
  const nav = useContext(NavContext);

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
      className={`fixed transition-[top] z-100 w-dvw hover:top-0 ${nav.navHidden ? "hidden" : ""} ${top ? "-top-22" : "top-0"}`}
    >
      <div className="relative">
        <div id="buffer" className="absolute translate-y-17 h-18 w-full"></div>
        <div className="w-dvw">
          <div className="flex justify-between bg-bg/70 backdrop-blur-lg p-4 shadow-taf rounded-full my-4 mx-auto max-w-[90rem]">
            <div className="text-3xl">
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="before:content-['<'] after:content-['/>'] font-jetbrains font-extrabold before:text-main after:text-main"
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
