import TypeElement from "./TypeElement";

export default function Typebar({ types }: { types: string[] }) {
  return (
    <div className="flex flex-row">
      {types.map((type: string, i: number) => {
        return <TypeElement type={type} key={i} i={i}></TypeElement>;
      })}
    </div>
  );
}
