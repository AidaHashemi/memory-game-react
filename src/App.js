// import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./pages/routes";
import "./App.css";

function App() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
