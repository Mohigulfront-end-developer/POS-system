import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Success from "./pages/Success";
// import ProtectedRoute from "./components/ProtectedRoute";
import SidebarLeft from "./components/SidebarLeft";
import OrderBasket from "./components/OrderBasket";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-[100vh] overflow-">
        <SidebarLeft />
        <div className="flex-[1] ">
          <Home />
        </div>
        <OrderBasket />
      </div>
    </BrowserRouter>
  );
};

export default App;
