import { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <FiMoon size={16} /> : <FiSun size={16} />}
    </button>
  );
}
