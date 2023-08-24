import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserInfos, Home } from "./routes";
import { UserInfosProvider } from "./context/UserInfosContext.tsx";
import App from "./App.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <UserInfos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <UserInfosProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </UserInfosProvider>
  </QueryClientProvider>
);
