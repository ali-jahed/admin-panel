import { Nav } from "react-bootstrap";
import { FaTachometerAlt, FaChartPie, FaCog } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="sidebar d-flex flex-column p-3">
      <div className="brand mb-4">Wons</div>

      <Nav className="flex-column">
        <Nav.Link><FaTachometerAlt /> Dashboard</Nav.Link>
        <Nav.Link><FaChartPie /> Analytics</Nav.Link>
        <Nav.Link><FaCog /> Settings</Nav.Link>
      </Nav>

      <div className="mt-auto sidebar-footer"></div>
    </aside>
  );
}
