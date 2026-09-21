import { useContext, useState } from "react";
import { IconsContext } from "../App";

export default function TypeElement({ type, i }: { type: string; i: number }) {
  const icons = useContext(IconsContext);
  const [hover, setHover] = useState(false);
  return (
    <div
      key={i}
      className={`${icons[type].color} mx-1 select-none relative`}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {icons[type].icon}
      <div
        className={`${hover ? "" : "hidden"} absolute border-2 rounded-lg select-none
          top-6 left-3 bg-bg border-sec backdrop-blur-sm z-10 text-sm text-text px-1`}
      >
        {icons[type].name}
      </div>
    </div>
  );
}
