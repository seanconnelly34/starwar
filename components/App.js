import React from "react";
import "./App.css";
import SideNav from "./components/nav/SideNav";
import SideNavRoutes from "./components/nav/SideNavRoutes";
import Header from "./components/Header";
import Entry from "./components/Entry";

function App() {
  return (
    <div className="row m-0">
      <SideNav />
      <div className="page-wrapper">
        <div className="col">
          <Header />
          <SideNavRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
