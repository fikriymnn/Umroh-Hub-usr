import React, { ReactNode, } from "react";
// import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router";

const noFoot = ["/UmrohPackage"];
const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const noFooter = noFoot.includes(location.pathname)
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      {!noFooter &&
        <Footer />
      }
    </div>
  );
};

export default DefaultLayout;
