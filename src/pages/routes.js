import * as paths from "../configs/route-paths";
import Home from "./home/Home";
import Match from "./match/Match";

export const routes = [
  {
    path: paths.HOME,
    element: <Home />,
  },
  {
    path: paths.MATCH,
    element: <Match />,
  },
];
