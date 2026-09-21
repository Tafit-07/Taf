import { Route, Routes, useLocation } from "react-router";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import { useEffect } from "react";
import About from "../pages/About";
import Nav from "../components/Nav";
import Cursor from "../components/Cursor";
import Projects from "../pages/Projects";
import CV from "../pages/CV";

export default function RoutesRouter() {
  const location = useLocation();
  const locationArray = [
    { path: "/", name: "Home", element: <Home></Home> },
    { path: "/test", name: "Test", element: <Home></Home> },
    { path: "/about", name: "About", element: <About></About> },
    { path: "/projects", name: "Projects", element: <Projects></Projects> },
    { path: "/cv", name: "CV", element: <CV></CV> },
  ];

  useEffect(() => {
    for (let i = 0; i < locationArray.length; i++) {
      const element = locationArray[i];
      if (location.pathname === element.path) {
        document.title = element.name;
        return;
      }
    }
    document.title = "Not Found";
  }, [location]);
  return (
    <div>
      <Nav></Nav>
      <Cursor></Cursor>
      <div
        id="main"
        className="max-w-[74rem] min-h-dvh px-32 pt-28 text-lg py-8
      mx-auto"
      >
        <Routes>
          {locationArray.map((item) => {
            return <Route path={item.path} element={item.element}></Route>;
          })}
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </div>
  );
}
