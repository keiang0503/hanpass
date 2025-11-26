import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Favorite } from "./screens/Favorite";
import { Transform } from "./screens/Transform";
import { PublishingStatus } from "./screens/PublishingStatus";
import { Components } from "./screens/Components/Components";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <PublishingStatus />,
  },
  {
    path: "/publishing",
    element: <PublishingStatus />,
  },
  {
    path: "/favoriteu95375",
    element: <Favorite />,
  },
  {
    path: "/transformu95750",
    element: <Transform />,
  },
  {
    path: "/components",
    element: <Components />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
