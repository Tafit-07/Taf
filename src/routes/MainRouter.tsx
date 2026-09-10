import { BrowserRouter } from "react-router";
import RoutesRouter from "./RoutesRouter";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <RoutesRouter></RoutesRouter>
    </BrowserRouter>
  );
}
