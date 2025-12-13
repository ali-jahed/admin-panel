import ThemeProvider from "./contexts/ThemeContext";


import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/theme.css";
import "./styles/sidebar.css";
import { SidebarCollapseProvider } from "./contexts/SidebarCollapseContext.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <SidebarCollapseProvider>
        <div className="app-root d-flex">
          <Sidebar />

          <div className="main-content flex-grow-1">
            <Topbar />
            <div className="p-4">
              <Dashboard />
            </div>
          </div>
        </div>
      </SidebarCollapseProvider>
    </ThemeProvider>
  );
}
