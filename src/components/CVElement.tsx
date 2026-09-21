import "../../print.css";
import Title from "./Title";
import TaFit from "../assets/TaFit.jpeg";
import { useState, useEffect, useContext } from "react";
import { SkillsContext } from "../App";
import { IconsContext } from "../App";

export default function CVElement() {
  const birth = new Date(2007, 9, 29, 13, 25);
  const now = new Date();
  const age = Math.floor(
    (now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24 * 365),
  );
  const [skew, setSkew] = useState({ x: 0, y: 0 });
  const skillList = useContext(SkillsContext);
  const icons = useContext(IconsContext);

  useEffect(() => {
    window.addEventListener("mousemove", rotateElement);

    function rotateElement(event) {
      const page = document.getElementById("page");
      const rect = page.getBoundingClientRect();

      const x = event.clientX;
      const y = event.clientY;

      const pageX = rect.left + page.scrollWidth / 2;
      const pageY = rect.top + page.scrollHeight / 2;

      setSkew({
        x: ((x - pageX) / pageX) * 10,
        y: ((y - pageY) / pageY) * 6,
      });
    }

    return () => {
      window.removeEventListener("mousemove", rotateElement);
    };
  }, [skew]);

  return (
    <>
      <button
        className="before:content-['['] after:content-[']'] after:text-sec font-jetbrains font-extrabold uppercase select-none transition before:text-sec hover:text-main 
        text-text hover:after:text-text hover:before:text-text text-xl"
        onClick={() => {
          window.print();
        }}
      >
        󱞆 Print/Download
      </button>

      <div className="flex justify-center text-xs">
        <div
          style={{
            transform: `perspective(10000px) rotateY(${skew.x}deg) rotateX(${skew.y * -1}deg)`,
          }}
          id="page"
          className="w-[21cm] aspect-210/297 z-1000 shadow-taf rounded-lg m-8 text-[#000] bg-[#fff] flex flex-col justify-between"
        >
          <div
            id="pageBound"
            className="h-full w-full relative rounded-lg overflow-hidden"
          >
            <div className="bg-dark bg-[url(src/assets/Grid.svg)] text-text-dark absolute h-full border-main border-r-4 w-1/3 pr-[1.5cm] py-[1.5cm] pl-[1.5cm] top-0 left-0">
              <div className="grid grid-cols-1 gap-4">
                <img
                  src={TaFit}
                  className="rounded-lg shadow-taf"
                  alt="Tijn Fit"
                />
                <section className="grid drid-cols-1 gap-1">
                  <h3 className="before:content-['##'] before:text-main before:mr-1 text-xl font-bold uppercase font-jetbrains">
                    Personalia
                  </h3>
                  <p>
                    <span className="text-main"></span> Tijn. A. Fit
                  </p>
                  <a href="mailto:tijn.a.fit@gmail.com">
                    <span className="text-main">󰇮</span> Tijn.a.fit@gmail.com
                  </a>
                  <p>
                    <span className="text-main"></span> 29-10-2007 ({age})
                  </p>
                  <p>
                    <span className="text-main">󰴕</span> Gieten, Drenthe,
                    Netherlands
                  </p>
                  <a href={window.location.origin}>
                    <span className="text-main">󰖟</span>{" "}
                    {window.location.origin}
                  </a>
                </section>

                <section className="grid grid-cols-1 gap-1">
                  <h3 className="before:content-['##'] before:text-main before:mr-1 text-xl font-bold uppercase font-jetbrains">
                    Education
                  </h3>
                  <div>
                    <h4 className="font-bold font-jetbrains">
                      <span className="text-main">󰑴</span> 2024 - Pressent
                    </h4>
                    <p>Noorderpoort - Software Developer BIT - MBO 4</p>
                  </div>
                </section>

                <section className="grid grid-cols-1 gap-1">
                  <h3 className="before:content-['##'] before:text-main before:mr-1 text-xl font-bold uppercase font-jetbrains">
                    Skills
                  </h3>
                  <div className="grid grid-cols-1">
                    <h4 className="before:content-['###'] before:text-main before:mr-1 text-md font-bold uppercase font-jetbrains">
                      Soft Skills
                    </h4>

                    <p>
                      <span className="text-main"></span> Problem solving
                    </p>
                    <p>
                      <span className="text-main">󰣁</span> Adaptability
                    </p>
                    <p>
                      <span className="text-main">󰏖</span> Organization
                    </p>
                  </div>
                  <div className="grid grid-cols-1">
                    <h4 className="before:content-['###'] before:text-main before:mr-1 text-md font-bold uppercase font-jetbrains">
                      Hard Skills
                    </h4>
                    {skillList.map((skill, i) => {
                      return (
                        <p>
                          <span className={`${icons[skill].color}`}>
                            {icons[skill].icon}
                          </span>{" "}
                          {icons[skill].name}
                        </p>
                      );
                    })}
                  </div>
                </section>

                <section className="grid drid-cols-1 gap-1">
                  <h3 className="before:content-['##'] before:text-main before:mr-1 text-xl font-bold uppercase font-jetbrains">
                    Languages
                  </h3>
                  <p>
                    <span className="text-orange-500">󰧱</span> Dutch(Native)
                  </p>
                  <p>
                    <span className="ter-red">󰡗</span> English(Professional)
                  </p>
                </section>
              </div>
            </div>
            <div className="absolute h-full w-2/3 py-[1.5cm] pr-[1.5cm] pl-[1.5cm] top-0 right-0">
              <Title title={1}>Tijn A Fit</Title>
              <p>
                I am a 3nd year front-end software developer in training. My
                soft skills are problem solving, adaptability, and organisation.
                I have experience with coding languages like HTML, CSS, and
                JavaScript and frameworks like Vue, Tailwind, and Bootstrap. And
                I'm eager to learn more.
              </p>
            </div>
            <div
              id="pageFrame"
              className="shadow-taf rounded-lg bg-dark/10 absolute w-full h-full top-0 right-0"
            >
              <div
                style={{
                  left: `calc(${skew.x * -1 * 3}px)`,
                  top: `calc(${skew.y * 3}px - 50%)`,
                }}
                className={`absolute top-0 h-[300%] w-[150%] z-100 flex -skew-x-12 opacity-15`}
              >
                <div className="bg-[#fff] shadow-[#fff] shadow-glass h-full w-[5%] mx-10"></div>
                <div className="bg-[#fff] shadow-[#fff] shadow-glass h-full w-[20%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
