import Title from "../components/Title";
import CVElement from "../components/CVElement";
import TypeWriter from "../components/TypeWriter";

export default function CV() {
  return (
    <>
      <Title title={1}>
        <TypeWriter>curriculum vitae</TypeWriter>
      </Title>

      <p>
        If you wish to download the CV make sure to select{" "}
        <span className="text-main font-jetbrains font-bold">
          Save<span className="font-inter"> </span>as
          <span className="font-inter"> </span>PDF
        </span>{" "}
        on the print interface
      </p>
      <button
        className="before:content-['['] after:content-[']'] after:text-sec font-jetbrains font-extrabold uppercase select-none transition before:text-sec hover:text-main 
        text-text hover:after:text-text hover:before:text-text text-xl"
        onClick={() => {
          window.print();
        }}
      >
        󱞆 Print/Download
      </button>
      <CVElement></CVElement>
    </>
  );
}
