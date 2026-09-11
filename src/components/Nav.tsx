import NavLink from "./NavLink.tsx";

export default function Nav() {
  return (
    <nav className="flex justify-between  mb-4">
      <div className="text-3xl">
        <button className="before:content-['<'] after:content-['/>'] before:text-main after:text-main">
          TAF_
        </button>
      </div>
      <div className="text-2xl">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/test">TEST</NavLink>
        <NavLink to="/invert">INVERT</NavLink>
      </div>
      <div className="flex flex-row">
        <NavLink to="/about">ABOUT</NavLink>
        <div className="">
          <div className="aspect-square h-9 rounded-full relative text-main bg-bg">
            <a
              className=" absolute -top-[0.125rem] text-4xl h-9"
              href="https://github.com/Tafit-07"
            >
              
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
