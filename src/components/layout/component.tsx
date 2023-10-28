import React from "react";
import { Header } from "./header";
import { SideBar } from "./sidebar";
// import classNames from "classnames";
import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
    return (
    <div>
      <Header />
      <main className="flex flex-row">
        <SideBar />
        <div>
          <Outlet />
        </div>
      </main>
    </div>
    )
}