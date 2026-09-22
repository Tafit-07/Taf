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

      if (navX >= e.clientX) {
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
    <>
      <div
        className={`fixed top-0 right-0 h-dvh w-dvw z-50 transition
          ${navState ? "backdrop-blur-xl" : "backdrop-blur-none pointer-events-none"}`}
      ></div>
      <nav className="fixed right-12 z-400 top-12">
        <div
          id="compass"
          onMouseEnter={() => {
            setInside(true);
          }}
          onMouseLeave={() => {
            setInside(false);
          }}
          className={`absolute top-1/2 left-1/2 bg-bg transition shadow-taf rounded-full z-400 w-fit h-fit -translate-1/2
             ${navState ? "outline-main" : "outline-sec"}`}
        >
          <button
            className={`h-14 w-14 transition-all flex flex-col p-4 justify-between items-center ${navState ? "text-main" : ""}`}
            onBlur={() => {
              setTimeout(() => {
                setNavState(false);
              }, 200);
            }}
            onClick={() => {
              if (navState) {
                setNavState(false);
              } else {
                setNavState(true);
              }
            }}
          >
            <div
              className={`transition-all pointer-events-none shadow-taf-inset rounded-full ${navState ? "w-0 h-0 bg-main" : "w-7 h-1 bg-text"}`}
            ></div>
            <div
              className={`transition-all pointer-events-none shadow-taf-inset rounded-full ${navState ? "w-7 h-7 bg-main" : "w-7 h-1 bg-text"}`}
            ></div>
            <div
              className={`transition-all pointer-events-none shadow-taf-inset rounded-full ${navState ? "w-0 h-0 bg-main" : "w-7 h-1 bg-text"}`}
            ></div>
          </button>
        </div>
        <div
          className={`absolute top-1/2 -left-1/2  h-100 -translate-1/2 w-50
           transition-[scale] duration-350 ${navState && !inside ? "scale-100" : "scale-0"}`}
          style={{ transform: `rotate(${navState ? dir : "0"}deg)` }}
        >
          <div className="flex items-center w-full h-full">
            <div className="w-1/2 h-full flex items-center">
              <svg
                className="fill-main"
                viewBox="0 0 250 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2023_2)">
                  <path d="M250 0V50L0 25L250 0Z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div
          className={`bg-radial from-main/20 via-40% via-bg/0 to-bg/0 absolute top-1/2 left-1/2 -translate-1/2 w-150 h-150 transition ${navState ? "scale-100" : "scale-0"}`}
        ></div>
        <div className="absolute top-1/2 left-1/2 bg-main">
          <div
            className={`absolute -translate-1/2 w-130 rounded-full aspect-1/1 z-200
             transition ${navState ? "scale-100" : "scale-0"}`}
          >
            {options.map((option, i) => {
              const deg = (i / (options.length - 1)) * 70;
              return (
                <div
                  key={i}
                  style={{
                    transform: `rotate(-${deg + 10}deg)`,
                  }}
                  className={`absolute text-2xl px-4 bottom-1/2 translate-y-1/2 right-0 w-130`}
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
    </>
  );
}
