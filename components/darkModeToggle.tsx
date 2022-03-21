import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("dark", false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <button
        id="darkMode"
        className="text-4xl"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "🌑" : "🌞"}
      </button>
    </>
  );
};

export default DarkModeToggle;
