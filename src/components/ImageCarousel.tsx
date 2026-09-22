import { useEffect, useState } from "react";

export default function ImageCarousel({
  images,
}: {
  images: { img: string; alt: string }[];
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [hoverInfo, setHoverInfo] = useState(false);

  function showNext() {
    setImageIndex((index) => {
      if (index === images.length - 1) {
        return 0;
      } else {
        return index + 1;
      }
    });
  }

  function showPrev() {
    setImageIndex((index) => {
      if (index === 0) {
        return images.length - 1;
      } else {
        return index - 1;
      }
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hover) {
        showNext();
      }
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [hover]);

  return (
    <div className="relative w-full my-2 select-none aspect-16/9">
      <div className="h-full w-full rounded-lg aspect-16/9 flex flex-row overflow-hidden">
        {images.map((image, i) => {
          return (
            <img
              style={{ translate: `${-100 * imageIndex}%` }}
              className="mask-clip-content transition aspect-16/9 object-cover h-full w-full"
              src={image.img}
              key={i}
              alt={image.alt}
              loading="lazy"
            />
          );
        })}
      </div>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`absolute rounded-lg shadow-taf overflow-hidden top-0 h-full w-full flex justify-between items-center`}
      >
        <div className="absolute bottom-0 flex justify-center w-full">
          <div
            className={`bg-bg/50 backdrop-blur-lg z-10 rounded-lg shadow-taf w-1/2 py-1 px-2 transition ${hoverInfo ? "-translate-y-12" : "translate-y-full"}`}
          >
            <p className="text-lg italic">{images[imageIndex].alt}</p>
          </div>
        </div>
        <div className="shadow-taf absolute z-10 m-2 bottom-0 rounded-full bg-bg/50 backdrop-blur-lg p-1">
          <div
            className="text-text border-2 border-text aspect-1/1 text-center text-xs h-5 font-bold font-jetbrains px-1 rounded-full"
            onMouseEnter={() => setHoverInfo(true)}
            onMouseLeave={() => setHoverInfo(false)}
          >
            i
          </div>
        </div>

        <div className="transition -translate-x-1/2 h-1/3 w-1/4 flex flex-col justify-center hover:translate-0">
          <button
            onClick={() => {
              showPrev();
            }}
            className={`p-4 py-1 m-2 h-fit w-fit shadow-taf select-none transition text-4xl bg-bg/50 backdrop-blur-lg rounded-lg hover:text-main ${images.length < 2 ? "hidden" : ""}`}
          >
            {""}
          </button>
        </div>

        <div className="h-full flex items-end">
          <div
            className={`rounded-full shadow-taf mb-2 flex justify-between p-2 transition bg-bg/50 backdrop-blur-lg ${images.length < 2 ? "hidden" : ""}`}
          >
            {images.map((_, index) => {
              return (
                <button
                  key={index}

                  className={`rounded shadow-taf font-bold transition-[aspect-ratio] mx-1 h-3
                    ${index === imageIndex ? "aspect-16/9 bg-main text-text" : "aspect-1/1 bg-sec text-bg"}`}
                  onClick={() => setImageIndex(index)}
                ></button>
              );
            })}
          </div>
        </div>
        <div className="transition translate-x-1/2 h-1/3 w-1/4 flex flex-col items-end justify-center hover:translate-0">
          <button
            onClick={() => {
              showNext();
            }}
            className={`p-4 py-1 m-2 shadow-taf h-fit w-fit select-none transition text-4xl bg-bg/50 backdrop-blur-lg rounded-lg hover:text-main ${images.length < 2 ? "hidden" : ""}`}
          >
            {""}
          </button>
        </div>
      </div>
    </div>
  );
}
