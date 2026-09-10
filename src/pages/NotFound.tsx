import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
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
          <button
            className="transition text-main text-center before:content-['['] after:content-[']'] before:no-underline after:no-underline before:text-text after:text-text hover:after:text-main hover:before:text-main hover:underline"
            onClick={() => {
              navigate("/");
            }}
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </>
  );
}
