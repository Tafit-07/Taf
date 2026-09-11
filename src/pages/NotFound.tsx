import NavLink from "../components/NavLink";

export default function NotFound() {
  const loc = document.location.pathname;

  return (
    <>
      <div className="absolute h-dvh w-dvw top-0 left-0 bg-linear-to-t from-main from-0% to-bg-dark to-60% flex flex-col justify-center items-center">
        <div className="flex flex-col items-center relative">
          <h3 className="absolute -top-26 text-8xl font-bold text-center before:content-['#'] before:text-main">
            404
          </h3>
          <p className="text-xl max-w-[48rem] p-4 text-center">
            Location{" "}
            <span className="rounded max-w-[48rem] bg-bg-dark text-main px-1 overflow-hidden text-clip">
              {loc}
            </span>{" "}
            does not exist or has been moved, Try going to the Homepage
          </p>
          <NavLink to="/">Go to Homepage</NavLink>
        </div>
      </div>
    </>
  );
}
