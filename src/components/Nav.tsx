import NavLink from "./NavLink.tsx";

export default function Nav() {
  return (
    <nav className="border-2 border-sec bg-slate-800 rounded-xl p-2">
      <div className="text-2xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/test">Home</NavLink>
        <NavLink to="/invert">Invert</NavLink>
      </div>
    </nav>
  );
}
