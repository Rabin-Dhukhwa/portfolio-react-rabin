import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      {/* header---- */}
      <Header />
      {/* dynamic page------- */}
      <main style={{ minHeight: "50vh" }}>{children}</main>
      {/* footer--------- */}
      <Footer />
    </>
  );
};
