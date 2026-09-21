import Title from "../components/Title";
import CVElement from "../components/CVElement";

export default function CV() {
  return (
    <>
      <Title title={1}>Curriculum vitae</Title>
      <p>
        If you wish to download the CV make sure to select{" "}
        <span className="text-main font-jetbrains font-bold">
          Save<span className="font-inter"> </span>as
          <span className="font-inter"> </span>PDF
        </span>{" "}
        on the print interface
      </p>
      <CVElement></CVElement>
    </>
  );
}
