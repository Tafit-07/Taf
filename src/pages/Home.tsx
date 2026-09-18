import Title from "../components/Title";
import Timer from "../components/Timer.tsx";
import { IconsContext } from "../App.tsx";
import { useContext } from "react";

export default function Home() {
  const skillList = [
    "html",
    "javascript",
    "typescript",
    "react",
    "css",
    "tailwind",
    "bootstrap",
    "git",
  ];
  const icons = useContext(IconsContext);

  return (
    <div className="">
      <section className="flex w-full">
        <Title title={1}>Tijn A Fit</Title>
      </section>
      <section>
        <Title title={2}>About me</Title>
        <p className="w-fit">Name: Tijn. A. Fit </p>
        <p className="w-fit">
          Age: <Timer></Timer>
        </p>
        <p className="pt-2">
          I am a goal‑oriented and detail‑focused Web Development student with a
          strong interest in Front‑end development. I enjoy creating
          user‑friendly and visually appealing websites. I also love puzzling
          with code and discovering how software works behind the scenes. When
          building websites, I pay attention not only to the visual design but
          also to usability and the finer details. I am motivated to continue
          developing my technical skills and to keep challenging myself.
        </p>
      </section>
      <section className="flex flex-col">
        <Title title={2}>Contact</Title>
        <a className="w-fit underline" href="mailto:tijn.a.fit@gmail.com">
          <span className="mr-1 select-none">{icons["mail"].icon}</span>
          Tijn.a.fit@gmail.com
        </a>
        <a
          className="w-fit underline"
          href="https://www.linkedin.com/in/tijn-fit-278a3339b/"
        >
          <span className="mr-1 select-none">{icons["linkedin"].icon}</span>
          Linkedin
        </a>
        <a className="w-fit underline" href="https://github.com/Tafit-07">
          <span className="mr-1 select-none">{icons["github"].icon}</span>GitHub
        </a>
      </section>
      <section>
        <Title title={2}>Skils</Title>
        {skillList.map((skill, i) => {
          return (
            <p className="w-fit" key={i}>
              <span
                className={`${icons[skill].color} text-lg select-none mr-1`}
              >
                {icons[skill].icon}
              </span>
              {icons[skill].name}
            </p>
          );
        })}
      </section>
    </div>
  );
}
