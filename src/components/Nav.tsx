import NavLink from "./NavLink.tsx";

export default function Nav() {
  return (
    <nav className="border-2 border-sec bg-slate-800 flex justify-between rounded-xl mb-4 p-2">
      <div className="text-2xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/test">Test</NavLink>
        <NavLink to="/invert">Invert</NavLink>
      </div>
      <div></div>
      <div className="flex flex-row">
        <NavLink to="/about" invert>
          About
        </NavLink>
        <a className="" href="https://github.com/Tafit-07">
          <div className="aspect-square h-9 rounded-full relative text-main text-center bg-bg">
            <div className=" absolute -top-[0.125rem] text-4xl h-9"></div>
          </div>
        </a>
      </div>
    </nav>
  );
}
