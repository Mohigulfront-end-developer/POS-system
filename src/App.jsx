import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Success from "./pages/Success";
// import ProtectedRoute from "./components/ProtectedRoute";
import SidebarLeft from "./components/SidebarLeft";
import OrderBasket from "./components/OrderBasket";
import Payment from "./components/Payment";

const App = () => {
    const [playmentClick, setplaymentClick] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex h-[100vh] overflow-hidden">
        <SidebarLeft />
        <div className="flex-[1] ">
          <Home />
        </div>
        <OrderBasket setplaymentClick={setplaymentClick} />
        {playmentClick && (
          <Payment
            playmentClick={playmentClick}
            setplaymentClick={setplaymentClick}
          />
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
