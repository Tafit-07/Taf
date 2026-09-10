import { Route, Routes, useLocation } from "react-router";
import Nav from "../components/Nav";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import { useEffect } from "react";
import About from "../pages/About";

export default function RoutesRouter() {
  const location = useLocation();
  const locationArray = [
    { path: "/", name: "Home", element: <Home></Home> },
    { path: "/test", name: "Test", element: <Home></Home> },
    { path: "/about", name: "About", element: <About></About> },
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
    <div className="p-4">
      <Nav></Nav>
      <Routes>
        {locationArray.map((item) => {
          return <Route path={item.path} element={item.element}></Route>;
        })}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}
