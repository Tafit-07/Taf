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
    <div className="relative w-[40rem] my-2 select-none aspect-16/9">
      <div className="h-full w-full rounded-lg aspect-16/9 outline-4 flex flex-row overflow-hidden outline-sec">
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
        className={`absolute rounded-lg overflow-hidden top-0 h-full w-full flex justify-between items-center`}
      >
        <div className="absolute top-0 flex justify-center w-full">
          <div
            className={`bg-sec rounded-b-xl w-1/2 p-1 pt-0 transition ${hoverInfo ? "translate-0" : "-translate-y-full"}`}
          >
            <p className="text-sm italic">{images[imageIndex].alt}</p>
          </div>
        </div>
        <div
          className="absolute bottom-0 z-10 pb-0 p-1"
          onMouseEnter={() => setHoverInfo(true)}
          onMouseLeave={() => setHoverInfo(false)}
        >
          
        </div>
        <div className="transition -translate-x-1/2 h-full w-1/4 flex flex-col justify-center hover:translate-0">
          <button
            onClick={() => {
              showPrev();
            }}
            className={`p-2 pl-1 h-fit w-fit select-none transition text-4xl bg-sec rounded-r-xl hover:text-main ${images.length < 2 ? "hidden" : ""}`}
          >
            {""}
          </button>
        </div>

        <div className="h-full flex items-end">
          <div
            className={`rounded-t-xl flex justify-between p-2 pb-1 transition bg-sec ${images.length < 2 ? "hidden" : ""}`}
          >
            {images.map((_, index) => {
              return (
                <button
                  key={index}

                  className={`rounded font-bold transition-[aspect-ratio] mx-1 h-3
                    ${index === imageIndex ? "aspect-16/9 bg-main text-text" : "aspect-1/1 bg-text text-bg"}`}
                  onClick={() => setImageIndex(index)}
                ></button>
              );
            })}
          </div>
        </div>
        <div className="transition translate-x-1/2 h-full w-1/4 flex flex-col items-end justify-center hover:translate-0">
          <button
            onClick={() => {
              showNext();
            }}
            className={`p-2 pr-1 h-fit w-fit select-none transition text-4xl bg-sec rounded-l-xl hover:text-main ${images.length < 2 ? "hidden" : ""}`}
          >
            {""}
          </button>
        </div>
      </div>
    </div>
  );
}
