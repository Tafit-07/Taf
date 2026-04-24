import { BrowserRouter, Route, Routes } from "react-router";
import Nav from "../components/Nav";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <div className="p-4">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
