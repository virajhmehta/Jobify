import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { useDashboardContext } from "../pages/DashoboardLayout";

const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        } // default we have shown the side bar and don't want to close the side bar when we navigating
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar /> 
          {/*don't want to close the side bar when we navigating, passed the prop in the NavLinks*/ }
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
