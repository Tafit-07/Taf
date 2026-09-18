import NavLink from "./NavLink.tsx";
import { useNavigate } from "react-router";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between mb-4">
      <div className="text-3xl">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="before:content-['<'] after:content-['/>'] before:text-main after:text-main"
        >
          TAF_
        </button>
      </div>
      <div className="text-2xl"></div>
      <div className="text-2xl flex flex-row">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/cv">CV</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
      </div>
    </nav>
  );
}
