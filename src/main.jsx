import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App";
import Homepage from "./routes/Homepage";
import Result, { loader as resultLoader } from "./routes/Result";
import ThemeContextProvider from "./store/context/ThemeCtx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        errorElement: (
          <h1 className="pt-10 text-center font-bold">
            Something wrong happened...
          </h1>
        ),
        children: [
          {
            index: true,
            element: <Homepage />,
          },
          {
            path: "/definition/:word",
            element: <Result />,
            loader: resultLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <RouterProvider router={router} />
  </ThemeContextProvider>
);
