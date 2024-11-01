"use client";

import { NextUIProvider } from "@nextui-org/react";

const Providers = ({ children }) => {
  return (
    <>
      <div className="">
       
        <NextUIProvider>{children}
        </NextUIProvider>
        
        
      </div>
    </>
  )
};

export default Providers;