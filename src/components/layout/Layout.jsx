import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
// import Employees from './pages/Employees';

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Navbar />
        <div className="container-fluid py-4">{children}</div>
      </main>
    </>
  );
};

export default Layout;
