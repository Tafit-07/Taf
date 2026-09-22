import Title from "../components/Title";
import Timer from "../components/Timer.tsx";
import { IconsContext } from "../App.tsx";
import { useContext } from "react";
import { NavContext } from "../App.tsx";
import { SkillsContext } from "../App.tsx";
import TaFit from "../assets/TaFit.jpeg";
import TypeWriter from "../components/TypeWriter.tsx";
import CVElement from "../components/CVElement.tsx";
import Button from "../components/Button.tsx";

export default function Home() {
  const nav = useContext(NavContext);
  nav.setNavHidden(false);
  const skillList = useContext(SkillsContext);
  const icons = useContext(IconsContext);

  return (
    <div className="grid grid-cols-8 gap-8">
      <section className="col-span-8">
        <h1 className="hidden">Tijn.a.Fit</h1>
        <h2 className="text-7xl font-jetbrains font-bold flex">
          <span className="text-main">#</span>
          <TypeWriter>Tijn.A.Fit</TypeWriter>
        </h2>
      </section>
      <section className="col-span-8">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <img className="rounded-lg shadow-taf" src={TaFit} alt="Tijn Fit" />
          </div>
          <div className="col-span-2">
            <Title title={2}>About me</Title>
            <p className="w-fit font-bold font-jetbrains text-xl">
              My age <Timer></Timer>
            </p>
            <p className="pt-2">
              I am a goal‑oriented and detail‑focused Web Development student
              with a strong interest in Front‑end development. I enjoy creating
              user‑friendly and visually appealing websites. I also love
              puzzling with code and discovering how software works behind the
              scenes. When building websites, I pay attention not only to the
              visual design but also to usability and the finer details. I am
              motivated to continue developing my technical skills and to keep
              challenging myself.
            </p>
            <div className="flex">
              <Button>test</Button>
              <Button>test2</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="col-span-2">
        <Title title={2}>Social</Title>
        <div className="flex flex-col select-none">
          <a
            className="w-fit underline"
            href="https://www.linkedin.com/in/tijn-fit-278a3339b/"
          >
            {icons["linkedin"].icon} Linkedin
          </a>
          <a className="w-fit underline" href="https://github.com/Tafit-07">
            {icons["github"].icon} GitHub
          </a>
        </div>
      </section>
      <section className="col-span-4">
        <Title title={2}>Skils</Title>
        <div className="grid grid-cols-1 gap-1">
          {skillList.map((skill, i) => {
            return (
              <p className="w-fit bg-dark text-text-dark rounded px-1" key={i}>
                <span
                  className={`${icons[skill].color} text-lg select-none mr-1`}
                >
                  {icons[skill].icon}
                </span>
                {icons[skill].name}
              </p>
            );
          })}
        </div>
      </section>
      <section className="col-span-8"></section>
    </div>
  );
}
