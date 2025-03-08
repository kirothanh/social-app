import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MantineProvider} from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import '@mantine/notifications/styles.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
      <Notifications />
  </MantineProvider>
);
