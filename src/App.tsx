import MainRouter from "./routes/MainRouter";
import { createContext, useState } from "react";

export const IconsContext = createContext(null);

export default function App() {
  const [icons, setIcons] = useState({
    react: { icon: "󰜈", color: "ter-blue", name: "React" },
    typescript: { icon: "", color: "ter-cyan", name: "TypeScript" },
    javascript: { icon: "", color: "ter-yellow", name: "JavaScript" },
    css: { icon: "", color: "ter-cyan", name: "CSS" },
    html: { icon: "", color: "ter-red", name: "HTML" },
    tailwind: { icon: "󱏿", color: "ter-cyan", name: "TailwindCSS" },
    bootstrap: { icon: "", color: "ter-purple", name: "Bootstrap" },
    vim: { icon: "", color: "ter-green", name: "Vim" },
    git: { icon: "󰊢", color: "ter-red", name: "Git" },
    linkedin: { icon: "󰌻", color: "ter-blue", name: "LinkedIn" },
    github: { icon: "󰊤", color: "ter-white", name: "GitHub" },
    mail: { icon: "", color: "ter-white", name: "E-mail" },
  });

  return (
    <>
      <IconsContext.Provider value={icons}>
        <MainRouter></MainRouter>
      </IconsContext.Provider>
    </>
  );
}
