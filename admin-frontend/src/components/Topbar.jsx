import ThemeToggle from "./ThemeToggle";

export default function Topbar() {
  return (
    <div className="topbar d-flex justify-content-between align-items-center p-3">
      <h3 className="m-0">Dashboard</h3>
      <ThemeToggle />
    </div>
  );
}
