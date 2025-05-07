import React, { useState, ReactNode, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
