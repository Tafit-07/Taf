import Title from "../components/Title";
import Timer from "../components/Timer.tsx";

export default function Home() {
  return (
    <div>
      <Title title={1}>Title</Title>
      <Title title={2}>Lorem ipsum dolor sit.</Title>
      <p className="w-fit">Name: Tijn. A. Fit </p>
      <p className="w-fit">
        age: <Timer></Timer>
      </p>
    </div>
  );
}
