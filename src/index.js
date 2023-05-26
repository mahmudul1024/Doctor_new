import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-day-picker/dist/style.css";
import AuthProvider from "./assets/components/Context/AuthProvider";
import { Toaster } from "react-hot-toast";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
    <Toaster />
  </React.StrictMode>,
  document.getElementById("root")
);
