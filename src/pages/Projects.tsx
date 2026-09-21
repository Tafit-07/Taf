import Title from "../components/Title";
import Typebar from "../components/Typebar";
import ImageCarousel from "../components/ImageCarousel";
import TypeWriter from "../components/TypeWriter";
import { ProjectsContext } from "../App";
import { useContext } from "react";

export default function Projects() {
  const projectList = useContext(ProjectsContext);

  return (
    <>
      <Title title={1}>
        <TypeWriter>Projects</TypeWriter>
      </Title>
      <div className="flex flex-col-reverse">
        {projectList.map((project, i) => {
          return (
            <section
              key={i}
              className="first:my-0 mb-16 bg-bg-light/50 p-8 backdrop-blur-xl rounded-2xl shadow-taf"
            >
              <div className="flex flex-row items-center">
                <Title title={2}>
                  {project.title}|<Typebar types={project.type}></Typebar>
                </Title>
              </div>
              <div className="flex justify-center">
                <ImageCarousel images={project.img}></ImageCarousel>
              </div>
              <p className="w-fit mt-1">{project.text}</p>
            </section>
          );
        })}
      </div>
    </>
  );
}
