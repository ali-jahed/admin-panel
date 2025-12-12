import ThemeProvider from "./contexts/ThemeContext";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/theme.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-root d-flex">
        <Sidebar />

        <div className="main-content flex-grow-1">
          <Topbar />
          <div className="p-4">
            <Dashboard />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
