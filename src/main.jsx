import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RefreshDataContextProvider from "./my-context/RefreshDataContext.jsx";

const queryClient = new QueryClient({});

ReactDOM.createRoot(document.getElementById("root")).render(
  <RefreshDataContextProvider>
    <QueryClientProvider client={queryClient}>
      <ToastContainer autoClose={5000} />
      <ReactQueryDevtools />
      <App />
    </QueryClientProvider>
  </RefreshDataContextProvider>
);
