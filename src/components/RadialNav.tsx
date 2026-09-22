import { useState, useEffect } from "react";
import NavLink from "./NavLink";

export default function RadialNav() {
  const [navState, setNavState] = useState(false);
  const [inside, setInside] = useState(false);
  const options = [
    { loc: "/", text: "Home" },
    { loc: "/projects", text: "Projects" },
    { loc: "/cv", text: "CV" },
    { loc: "/about", text: "About" },
  ];
  const [dir, setDir] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", CalculateAngle);
    function CalculateAngle(e: MouseEvent) {
      const element = document.getElementById("compass");
      const rect = element?.getBoundingClientRect();
      const navX = rect?.left + element?.scrollWidth / 2;
      const navY = rect?.top + element?.scrollHeight / 2;
      const difranceX = navX - e.clientX;
      const difranceY = navY - e.clientY;
      const radiants = Math.atan(difranceY / difranceX);
      const deg = radiants * (180 / Math.PI);
      if (navX > e.clientX) {
        setDir(deg);
      } else {
        setDir(deg + 180);
      }
    }
    return () => {
      window.removeEventListener("mousemove", CalculateAngle);
    };
  }, []);

  return (
    <nav className="fixed right-12 top-12">
      <div
        onMouseEnter={() => {
          setInside(true);
        }}
        onMouseLeave={() => {
          setInside(false);
        }}
        id="compass"
        className="absolute top-1/2 left-1/2 bg-bg rounded-full z-100 p-4 -translate-1/2 text-5xl shadow-taf"
      >
        <button
          className={`transition ${navState ? "text-main" : ""}`}
          onBlur={() => {
            setNavState(false);
          }}
          onClick={() => {
            if (navState) {
              setNavState(false);
            } else {
              setNavState(true);
            }
          }}
        >
          
        </button>
      </div>
      <div
        className={`absolute z-1 top-1/2 -left-1/2  h-100 -translate-1/2 w-50
           transition-[scale] duration-350 ${navState && !inside ? "scale-100" : "scale-0"}`}
        style={{ transform: `rotate(${navState ? dir : "0"}deg)` }}
      >
        <div className="flex items-center w-full h-full">
          <div className="w-1/2 bg-main h-1"></div>
        </div>
      </div>
      <div
        className={`bg-radial from-main/50 via-40% via-bg/0 to-bg/0 absolute top-1/2 left-1/2 -translate-1/2 w-150 h-150 transition ${navState ? "scale-100" : "scale-0"}`}
      ></div>
      <div className="absolute top-1/2 left-1/2 bg-main">
        <div
          className={`absolute -translate-1/2 w-120 rounded-full aspect-1/1 z-10
             transition ${navState ? "scale-100" : "scale-0"}`}
        >
          {options.map((option, i) => {
            const deg = (i / (options.length - 1)) * 90;
            return (
              <div
                key={i}
                style={{
                  transform: `rotate(-${deg}deg)`,
                }}
                className={`absolute text-xl px-4 bottom-1/2 translate-y-1/2 right-0 w-120`}
              >
                <NavLink
                  func={() => {
                    setNavState(false);
                  }}
                  to={option.loc}
                >
                  {option.text}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
