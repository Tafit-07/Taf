import MainRouter from "./routes/MainRouter";
import { createContext, useState, useEffect } from "react";

export const IconsContext = createContext(null);
export const NavContext = createContext(null);
export const SkillsContext = createContext(null);
export const ProjectsContext = createContext(null);

export default function App() {
  const [icons] = useState({
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
    mail: { icon: "󰇮", color: "ter-white", name: "E-mail" },
  });

  const [skillList] = useState([
    "html",
    "javascript",
    "typescript",
    "react",
    "css",
    "tailwind",
    "bootstrap",
    "git",
  ]);

  const [projectList] = useState([
    {
      title: "lorem ipsum 1",
      img: [
        { img: "https://picsum.photos/600/600", alt: "Lorem Picsum 1" },
        { img: "https://picsum.photos/600/400", alt: "Lorem Picsum 2" },
        { img: "https://picsum.photos/1200/600", alt: "Lorem Picsum 3" },
        { img: "https://picsum.photos/1920/1080", alt: "Lorem Picsum 4" },
        { img: "https://picsum.photos/700/400", alt: "Lorem Picsum 5" },
      ],
      type: ["typescript", "react", "tailwind"],
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sapiente, 
      quam quo exercitationem, culpa blanditiis, animi consequatur
          at vel ratione ipsum facere quibusdam et! Modi totam excepturi
          voluptates id, vero deleniti ullam obcaecati eius sed, veritatis
          necessitatibus recusandae, nemo autem neque fugiat quidem reiciendis?
          Facilis necessitatibus accusamus neque doloremque laborum.`,
    },
    {
      title: "lorem ipsum 2",
      img: [
        { img: "https://picsum.photos/600/400", alt: "Lorem Picsum" },
        { img: "https://picsum.photos/500/300", alt: "Lorem Picsum" },
      ],
      type: ["html", "javascript", "css"],
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sapiente, 
      quam quo exercitationem, culpa blanditiis, animi consequatur
          at vel ratione ipsum facere quibusdam et! Modi totam excepturi
          voluptates id, vero deleniti ullam obcaecati eius sed, veritatis
          necessitatibus recusandae, nemo autem neque fugiat quidem reiciendis?
          Facilis necessitatibus accusamus neque doloremque laborum.`,
    },
    {
      title: "lorem ipsum 3",
      img: [{ img: "https://picsum.photos/1600/900", alt: "Lorem Picsum" }],
      type: ["html", "javascript", "tailwind"],
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sapiente, 
      quam quo exercitationem, culpa blanditiis, animi consequatur
          at vel ratione ipsum facere quibusdam et! Modi totam excepturi
          voluptates id, vero deleniti ullam obcaecati eius sed, veritatis
          necessitatibus recusandae, nemo autem neque fugiat quidem reiciendis?
          Facilis necessitatibus accusamus neque doloremque laborum.`,
    },
  ]);

  const [dark, setDark] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const root = document.documentElement;
  const darkModeMql =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

  useEffect(() => {
    if (darkModeMql && darkModeMql.matches) {
      setDark(true);
    } else {
      setDark(false);
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches;
        setDark(newColorScheme);
      });
  }, [dark, darkModeMql]);

  if (dark) {
    root.style.setProperty("--bg-dark", "#05080e");
    root.style.setProperty("--bg", "#0b1016");
    root.style.setProperty("--bg-light", "#161C24");
    root.style.setProperty("--sec", "#485470");
    root.style.setProperty("--text", "#ddf0f0");
  } else {
    root.style.setProperty("--bg-dark", "#ECE9FC");
    root.style.setProperty("--bg", "#f0f0f0");
    root.style.setProperty("--bg-light", "#fafafa");
    root.style.setProperty("--sec", "#6e8383");
    root.style.setProperty("--text", "#0b1016");
  }
  return (
    <>
      <IconsContext.Provider value={icons}>
        <NavContext.Provider
          value={{ navHidden: navHidden, setNavHidden: setNavHidden }}
        >
          <SkillsContext.Provider value={skillList}>
            <ProjectsContext.Provider value={projectList}>
              <div
                id="top"
                className={`min-h-dvh h-full ${dark ? "dark" : ""} font-inter text-text bg-[url(src/assets/Grid-Light.svg)] dark:bg-[url(src/assets/Grid.svg)]`}
              >
                <MainRouter></MainRouter>
              </div>
              <div className="fixed top-0 bg-bg-dark bg-linear-to-t dark:bg-radial z-[-2] from-main/50 dark:from-main/50 to-bg h-[200dvh] dark:h-[500dvh] w-dvw"></div>
            </ProjectsContext.Provider>
          </SkillsContext.Provider>
        </NavContext.Provider>
      </IconsContext.Provider>
    </>
  );
}
