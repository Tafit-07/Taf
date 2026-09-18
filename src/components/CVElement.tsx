import "../../print.css";
import Title from "./Title";

export default function CVElement() {
  const birth = new Date(2007, 9, 29, 13, 25);
  const now = new Date();
  const age = Math.floor(
    (now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24 * 365),
  );

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

      <div className="flex justify-center">
        <div
          id="page"
          className="h-[29.7cm] w-[21cm] bg-[#fff] text-[#000] flex flex-col justify-betwee
        px-[2cm] py-[2cm] relative"
        >
          <div className="h-full w-full">
            <div className="bg-main absolute h-full border-sec border-r-4 text-[#fff] w-1/3 pr-[1.5cm] py-[1.5cm] pl-[1.5cm] top-0 left-0">
              <div className="aspect-4/5 bg-text w-full"></div>
              Age: {age}
            </div>
            <div className="absolute h-full w-2/3 py-[1.5cm] pr-[1.5cm] pl-[1.5cm] top-0 right-0">
              <Title title={1}>Tijn A Fit</Title>
              <p>test</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
