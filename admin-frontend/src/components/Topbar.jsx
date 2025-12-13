import { FaBars } from "react-icons/fa";
import { useSidebarCollapse } from "../contexts/SidebarCollapseContext.jsx";
import ThemeToggle from "./ThemeToggle";

export default function Topbar() {
  const { toggleSidebar } = useSidebarCollapse();

  return (
    <div className="topbar d-flex justify-content-between align-items-center p-3">
      <div className="d-flex">
        <button
          onClick={toggleSidebar}
          className="btn btn-outline-secondary d-flex align-items-center justify-content-center ms-2"
          aria-label="Toggle sidebar"
        >
          <FaBars size={16} />
        </button>
        <ThemeToggle />
      </div>
      <h3 className="m-0">Dashboard</h3>
    </div>
  );
}
