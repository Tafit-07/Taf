import TypewriterComponent from "typewriter-effect";

export default function TypeWriter({ children }) {
  return (
    <span className="flex">
      <TypewriterComponent
        options={{
          strings: [children],
          autoStart: true,
          cursor: "",
          pauseFor: 999999999999999,
        }}
      ></TypewriterComponent>
      <span className="animate-blink">_</span>
    </span>
  );
}
