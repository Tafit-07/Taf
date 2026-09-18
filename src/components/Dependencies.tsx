import { useEffect, useState } from "react";
import Title from "./Title";

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
      <Title title={2}>Instaled packages</Title>
      <ul className=" mt-1 list-inside">
        {Object.entries(packages).map(([key, value]: [string, unknown], i) => {
          return (
            <li
              key={i}
              className="font-medium text-lg text-text align-text-bottom"
            >
              <a
                href={`https://www.npmjs.com/package/${key}`}
                className="before:content-[''] transition before:text-lg before:text-ter-blue hover:text-ter-blue before:font-icons before:mr-2"
              >
                {key}
              </a>
              <span className="text-sm ml-1 font-normal text-text-disabled">
                {value as string}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
