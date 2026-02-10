import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import Airpods from "./components/Airpods.tsx";
import Playstation from "./components/Playstation.tsx";
import Carrello from "./components/Carrello.tsx";
import Account from "./components/Account.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/airpods" element={<Airpods />} />
        <Route path="/playstation" element={<Playstation />} />
        <Route path="/cart" element={<Carrello />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);
