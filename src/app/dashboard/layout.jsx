"use client";

import Navbars from "@/components/Navbar";
import { CartProvider } from "@/context/cartContext";
import Wrapper from "@/Wrapper/Wrapper";
import React from "react";


const Layout = ({ children }) => {
  return (
    <CartProvider>
    <div className="flex h-screen">

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="sticky z-[20] top-0 bg-white">
          <Navbars/>
        </div>

        {/* Children (Main Content) */}
        <div className="overflow-auto flex-1 p-4">
          <Wrapper>{children}</Wrapper>
        </div>
      </div>
    </div>
    </CartProvider>
  );
};

export default Layout;
