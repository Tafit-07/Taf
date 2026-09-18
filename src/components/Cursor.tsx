import { useState, useEffect } from "react";

export default function Cursor() {
  const [cords, setCords] = useState({ x: 0, y: 0 });
  const [cursorType, setType] = useState({ in: "", out: "" });
  const [lst, setLST] = useState(0);
  const [dir, setDir] = useState({ dir: "", mod: 12 });
  const [hover, setHover] = useState(null);
  useEffect(() => {
    const cursorTypes = {
      default: {
        in: "h-[0.375rem] w-[0.375rem] rounded-full bg-text outline-2 outline-bg-dark",
        out: "h-6 w-6 rounded-full border-2 border-main",
      },
      pointer: {
        in: "h-[0.375rem] w-[0.375rem] rounded-full outline-2 bg-text outline-bg-dark animate-scale",
        out: "h-4 w-4 rounded-full border-2 border-main bg-radial from-main/0 to-main animate-ping",
      },
      text: {
        in: "h-5 w-[0.1rem] rounded-full bg-text outline-2 outline-bg-dark",
        out: "h-9 w-3 rounded-md border-2 border-main/0",
      },
      scroll: {
        in: "w-[0.375rem] h-[0.75rem] rounded-full outline-2 bg-text outline-bg-dark",
        out: "h-1 w-1 rounded-full border-2 border-main/0",
      },
    };
    const mouseMove = (event: MouseEvent) => {
      setHover(event.target.nodeName);
      if (hover === "BUTTON" || hover === "A") {
        setType(cursorTypes.pointer);
      } else if (hover === "P" || hover === "SPAN" || hover === "H2") {
        setType(cursorTypes.text);
      } else {
        setType(cursorTypes.default);
      }

      setCords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    const scrollEvent = () => {
      setType(cursorTypes.scroll);
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lst) {
        setDir({ dir: "", mod: 12 });
      } else if (st < lst) {
        setDir({ dir: "", mod: -12 });
      }
      setLST(st <= 0 ? 0 : st);

      setTimeout(() => {
        setType(cursorTypes.default);
        setDir({ dir: "", mod: 12 });
      }, 700);
    };

    const ring = document.getElementById("out");

    ring?.animate(
      {
        left: `${cords.x}px`,
        top: `${cords.y}px`,
      },
      { duration: 350, fill: "forwards" },
    );

    window.addEventListener("scroll", scrollEvent);
    window.addEventListener("mousemove", mouseMove);

    return () => {
      removeEventListener("mousemove", mouseMove);
      removeEventListener("scroll", scrollEvent);
    };
  }, [cursorType, lst, hover]);

  return (
    <>
      <div id="cursor" className="static">
        <div
          style={{
            transition: "all 300ms",
          }}
          id="out"
          className={`transition cursor-none pointer-events-none z-[999999] -translate-1/2 fixed ${cursorType.out}`}
        ></div>
        <div
          style={{
            left: `${cords.x}px`,
            top: `${cords.y}px`,
            transition: "all 300ms, top 0ms, left 0ms",
          }}
          className={`transition duration-500 -translate-1/2 cursor-none pointer-events-none z-[999999] fixed ${cursorType.in}`}
        ></div>
        <div
          style={{ left: `${cords.x}px`, top: `${cords.y + dir.mod}px` }}
          className="fixed text-sm -translate-1/2"
        >
          {dir.dir}
        </div>
      </div>
    </>
  );
}
