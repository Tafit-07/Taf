import Title from "../components/Title";
import Typebar from "../components/Typebar";
import ImageCarousel from "../components/ImageCarousel";

export default function Projects() {
  const projectList = [
    {
      title: "lorem ipsum",
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
      title: "lorem ipsum",
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
      title: "lorem ipsum",
      img: [{ img: "https://picsum.photos/1600/900", alt: "Lorem Picsum" }],
      type: ["html", "javascript", "tailwind"],
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sapiente, 
      quam quo exercitationem, culpa blanditiis, animi consequatur
          at vel ratione ipsum facere quibusdam et! Modi totam excepturi
          voluptates id, vero deleniti ullam obcaecati eius sed, veritatis
          necessitatibus recusandae, nemo autem neque fugiat quidem reiciendis?
          Facilis necessitatibus accusamus neque doloremque laborum.`,
    },
  ];

  return (
    <>
      <Title title={1}>Projects</Title>
      <div>
        {projectList.map((project, i) => {
          return (
            <section key={i} className="mt-4 first:mt-0">
              <div className="flex flex-row items-center">
                <Title title={2}>{project.title}</Title>
                <p className="text-3xl font-bold mx-3">|</p>
                <Typebar types={project.type}></Typebar>
              </div>
              <ImageCarousel images={project.img}></ImageCarousel>

              <p className="w-fit mt-1">{project.text}</p>
            </section>
          );
        })}
      </div>
    </>
  );
}
