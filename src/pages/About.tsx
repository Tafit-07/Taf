import Dependencies from "../components/Dependencies";
import Title from "../components/Title";

export default function About() {
  return (
    <>
      <Title title={1}>About this site</Title>
      <Title title={2}>Font</Title>
      <section className="flex flex-col font-medium text-lg text-text align-text-bottom">
        <a
          className="before:content-[''] transition before:text-lg before:text-ter-blue hover:text-ter-blue before:font-icons before:mr-2"
          href="https://www.jetbrains.com/lp/mono/"
        >
          JetBrainsMono
        </a>
        <a
          className="before:content-[''] transition before:text-lg before:text-ter-blue hover:text-ter-blue before:font-icons before:mr-2"
          href="https://www.nerdfonts.com/"
        >
          NerdFont
        </a>
        <a
          className="before:content-[''] transition before:text-lg before:text-ter-blue hover:text-ter-blue before:font-icons before:mr-2"
          href="https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/JetBrainsMono"
        >
          JetBrainsMono NerdFont
        </a>
      </section>
      <Dependencies></Dependencies>
    </>
  );
}
