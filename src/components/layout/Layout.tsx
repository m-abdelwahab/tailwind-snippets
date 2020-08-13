import React from "react";
import { Footer, Navbar, GitHubRibbon, TailwindUIBanner } from "./index";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className=" flex flex-col">
      <GitHubRibbon />
      <Navbar />
      <main>{children}</main>
      <TailwindUIBanner />
      <Footer />
    </div>
  );
};

export default Layout;
