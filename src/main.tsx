import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./main.css";
import Home from "./components/Home";
import Detail from "./components/Detail";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/:category?",
    element: <Home />,
  },
  {
    path: "/:category/:id",
    element: <Detail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
