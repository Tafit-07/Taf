import "../../print.css";
import Title from "./Title";

export default function CVElement() {
  return (
    <>
      <button
        className="before:content-['['] after:content-[']'] after:text-text before:text-text hover:text-text 
        text-text-disabled hover:after:text-text-disabled hover:before:text-text-disabled
        active:before:content-['{'] active:after:content-['}'] active:before:text-main active:after:text-main text-xl"
        onClick={() => {
          window.print();
        }}
      >
        <span className="mr-1"></span>DOWNLOAD
      </button>
      <div
        id="page"
        className="aspect-1000/1414 bg-[#fff] text-[#000] flex flex-col justify-betwee
        px-[calc((100%/21)*2.5)] py-[calc((100%/29.7)*2.5)]"
      >
        <Title title={1}>Test</Title>
        <p>test</p>
      </div>
    </>
  );
}
