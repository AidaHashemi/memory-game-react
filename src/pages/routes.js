import * as paths from "../configs/route-paths";
import Home from "./home/Home";
import Match from "./match/Match";
import Easy from "./easy/Easy";
import Medium from "./medium/Medium";
import Hard from "./hard/Hard";

export const routes = [
  {
    path: paths.HOME,
    element: <Home />,
  },
  {
    path: paths.MATCH,
    element: <Match />,
  },
  {
    path: paths.EASY,
    element: <Easy />,
  },
  {
    path: paths.MEDIUM,
    element: <Medium />,
  },

  {
    path: paths.HARD,
    element: <Hard />,
  },
];
