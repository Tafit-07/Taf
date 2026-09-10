import { useEffect, useState } from "react";

export default function Dependencies() {
  const [packages, setPackages] = useState({});
  useEffect(() => {
    fetch("/../package.json")
      .then((req) => req.json())
      .then((res) => {
        setPackages(res.dependencies);
      });
  }, []);

  return (
    <>
      <h2 className="font-bold text-2xl mb-1 text-main">Installed packages:</h2>
      <div className="bg-sec h-[2px] w-full"></div>
      <ul className=" mt-1 list-inside">
        {Object.entries(packages).map(([key, value]: [string, unknown], i) => {
          return (
            <li
              key={i}
              className="font-medium text-lg text-text align-text-bottom"
            >
              <a
                href={`https://www.npmjs.com/package/${key}`}
                className="before:content-['󰝥'] hover:before:content-[''] before:text-sm hover:text-main hover:italic before:font-icons before:mr-2"
              >
                {key}
              </a>
              <span className="text-sm ml-1 font-normal text-main">
                {value as string}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
