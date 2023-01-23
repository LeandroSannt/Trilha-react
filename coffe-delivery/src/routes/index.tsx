import { BrowserRouter, Route, Routes } from "react-router-dom";

import Checkout from "../pages/checkout";
import Home from "../pages/home";
import Confirmed from "../pages/confirmed";
import { Header } from "../components";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmed" element={<Confirmed />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
