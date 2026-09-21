import NavLink from "../components/NavLink";
import { useContext } from "react";
import { NavContext } from "../App";

export default function NotFound() {
  const loc = document.location.pathname;
  const nav = useContext(NavContext);
  nav.setNavHidden(true);

  return (
    <div
      id="notFound"
      className="fixed top-[calc(50%-50dvh)] left-[calc(50%-50dvw)] overflow-hidden w-dvw h-dvh z-1000 bg-bg-dark flex flex-col justify-center items-center"
    >
      <div className="absolute top-0 bg-bg-dark bg-radial z-[-1] from-main/30 to-bg-dark h-[400dvh] w-dvw">
        <div className="bg-[url(src/assets/Grid-Light.svg)] dark:bg-[url(src/assets/Grid.svg)] h-full"></div>
      </div>
      <div className="flex flex-col items-center relative">
        <h3 className="-top-29 text-9xl font-bold text-center before:content-['#'] before:text-main">
          404
        </h3>
        <p className="text-xl max-w-[48rem] p-4 text-center">
          Location{" "}
          <span className="rounded-lg shadow-taf max-w-[48rem] bg-bg-dark text-main px-2 py-1 overflow-hidden text-clip">
            {loc}
          </span>{" "}
          does not exist or has been moved, Try going to the Homepage
        </p>
        <NavLink to="/">Go to Homepage</NavLink>
      </div>
    </div>
  );
}
