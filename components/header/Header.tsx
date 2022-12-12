import React from "react";
import TabBar from "../tabBar/TabBar";
function Header() {
  return (
    <div className="header box-shadow">
      <div className="max-width">
        <div className="wrapper-logo">
          <div className="logo">
            <img src="/images/logo.png" alt="Picture of the author" />
          </div>
          <div className="newspaper">
            <img src="/images/newspaper.jpg" alt="Picture of the author" />
          </div>
        </div>
        <TabBar />
      </div>
    </div>
  );
}

export default Header;
