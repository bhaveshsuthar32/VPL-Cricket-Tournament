// import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { userRoutes, adminRoutes } from "./routes";
import { ErrorFallback, PageNotFound } from "./components";

const router = createBrowserRouter([
  ...userRoutes,
  ...adminRoutes,
  { path: "/error/*", element: <ErrorFallback /> },
  { path: "*", element: <PageNotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
