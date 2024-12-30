import { useState } from "react";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";

function App() {
  const [sidebarToggle,setSidebarToggle]= useState(false)
  return (
    <div className="flex">
      <SideBar  sidebarToggle={sidebarToggle}></SideBar>
      <Dashboard
      sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}></Dashboard>
    </div>
  );
}

export default App;
