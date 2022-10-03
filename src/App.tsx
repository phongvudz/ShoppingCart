import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import { ShoppingCart } from "./components/ShoppingCart";
import {
  ShoppingCartProvider,
  useShoppingCart,
} from "./context/ShoppingCartContext";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <div className="px-10 mb-4 max-w-6xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
