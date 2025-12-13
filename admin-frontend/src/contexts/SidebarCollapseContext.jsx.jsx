import React, { createContext, useContext, useState } from "react";

const SidebarCollapseContext = createContext(null);

export function SidebarCollapseProvider({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(prev => !prev);
  const openSidebar = () => setCollapsed(false);
  const closeSidebar = () => setCollapsed(true);

  return (
    <SidebarCollapseContext.Provider
      value={{ collapsed, toggleSidebar, openSidebar, closeSidebar }}
    >
      {children}
    </SidebarCollapseContext.Provider>
  );
}

export function useSidebarCollapse() {
  const context = useContext(SidebarCollapseContext);
  if (!context) {
    throw new Error(
      "useSidebarCollapse must be used inside SidebarCollapseProvider"
    );
  }
  return context;
}
